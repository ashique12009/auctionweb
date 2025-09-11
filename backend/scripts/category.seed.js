require("dotenv").config();
const { promisePool } = require("../src/config/db");

async function seedCategories() {
    try {
        // Categories to insert (parent_category_id = null for top-level)
        const categories = [
            { category_name: "Electronics", parent_category_id: null },
            { category_name: "Art", parent_category_id: null },
            { category_name: "Cars", parent_category_id: null },
            { category_name: "Mobiles", parent_category_id: 1 }, // child of Electronics
            { category_name: "Paintings", parent_category_id: 2 }, // child of Art
            { category_name: "SUV", parent_category_id: 3 }, // child of Cars
        ];

        for (const cat of categories) {
            const query = `
                INSERT INTO categories (category_name, parent_category_id, created_at)
                VALUES (?, ?, NOW())
                ON DUPLICATE KEY UPDATE 
                category_name = VALUES(category_name),
                parent_category_id = VALUES(parent_category_id)
            `;

            await promisePool.query(query, [
                cat.category_name,
                cat.parent_category_id,
            ]);
        }

        console.log("✅ Categories seeded successfully");
        process.exit(0);
    } catch (err) {
        console.error("❌ Error seeding categories:", err.message);
        process.exit(1);
    }
}

seedCategories();
