require("dotenv").config();
const bcrypt = require("bcrypt");
const { promisePool } = require("../src/config/db");

async function seedAdminUser() {
    try {
        // Admin user details
        const admin = {
            email: "admin@example.com",
            password: "Admin@123", // plaintext (will be hashed)
            first_name: "System",
            last_name: "Admin",
            phone: "1234567890",
            address: "HQ",
            role: "admin",
        };

        // Hash password
        const passwordHash = await bcrypt.hash(admin.password, 10);

        // Insert query
        const query = `
            INSERT INTO users 
            (email, password_hash, first_name, last_name, phone, address, role, created_at, last_login) 
            VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NULL)
            ON DUPLICATE KEY UPDATE 
            email = VALUES(email), 
            password_hash = VALUES(password_hash), 
            role = VALUES(role), 
            created_at = NOW()
        `;

        await promisePool.query(query, [
            admin.email,
            passwordHash,
            admin.first_name,
            admin.last_name,
            admin.phone,
            admin.address,
            admin.role,
        ]);

        console.log("✅ Admin user seeded successfully");
        process.exit(0);
    } catch (err) {
        console.error("❌ Error seeding admin user:", err.message);
        process.exit(1);
    }
}

seedAdminUser();