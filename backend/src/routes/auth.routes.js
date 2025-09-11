const express = require("express");
const bcrypt = require("bcrypt");
const { promisePool } = require("../config/db"); // import db connection
const router = express.Router();

// Handle login form
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetch user by username
        const [rows] = await promisePool.query(
            "SELECT * FROM users WHERE email = ? LIMIT 1",
            [email]
        );

        if (rows.length === 0) {
            return res.render("login", { error: "Invalid username or password" });
        }

        const user = rows[0];

        // Compare hashed password
        const validPassword = await bcrypt.compare(password, user.password_hash);

        if (!validPassword) {
            return res.render("login", { error: "Invalid username or password" });
        }

        // Save session
        req.session.user = {
            id: user.user_id,
            email: user.email,
            role: user.role,
        };

        // Update last_login
        await promisePool.query("UPDATE users SET last_login = NOW() WHERE user_id = ?", [
            user.user_id,
        ]);

        // Redirect based on role (example)
        if (user.role === "admin") {
            res.redirect("/admin/dashboard");
        } else {
            res.redirect("/"); // or user-specific page
        }
    } catch (err) {
        console.error(err);
        res.render("login", { error: "Something went wrong. Try again." });
    }
});

// Logout
router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

module.exports = router;
