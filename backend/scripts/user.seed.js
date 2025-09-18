require("dotenv").config();
const bcrypt = require("bcrypt");
const { promisePool } = require("../src/config/db");

async function seedUsers() {
    try {
        // Users to seed
        const users = [
            {
                email: "admin@example.com",
                password: "Admin@123",
                first_name: "System",
                last_name: "Admin",
                phone: "1234567890",
                address: "HQ",
                role: "admin",
            },
            {
                email: "seller@example.com",
                password: "Seller@123",
                first_name: "John",
                last_name: "Seller",
                phone: "1112223333",
                address: "Market Street",
                role: "seller",
            },
            {
                email: "buyer@example.com",
                password: "Buyer@123",
                first_name: "Jane",
                last_name: "Buyer",
                phone: "4445556666",
                address: "Main Avenue",
                role: "buyer",
            },
        ];

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

        for (const user of users) {
            const passwordHash = await bcrypt.hash(user.password, 10);
            await promisePool.query(query, [
                user.email,
                passwordHash,
                user.first_name,
                user.last_name,
                user.phone,
                user.address,
                user.role,
            ]);
            console.log(`✅ User seeded: ${user.email} (${user.role})`);
        }

        console.log("🎉 All users seeded successfully");
        process.exit(0);
    } catch (err) {
        console.error("❌ Error seeding users:", err.message);
        process.exit(1);
    }
}

seedUsers();