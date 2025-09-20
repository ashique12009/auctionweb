require("dotenv").config();
const { promisePool } = require("../src/config/db");

async function seedProducts() {
    try {
        // Sample products
        const products = [
            {
                seller_id: 2, // make sure user_id=2 exists
                category_id: 1, // Electronics
                title: "MacBook Pro 16-inch",
                description: "Latest Apple MacBook Pro with M2 chip.",
                starting_price: 1200.00,
                reserve_price: 1500.00,
                buy_now_price: 2000.00,
                start_time: new Date(),
                end_time: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
                status: "active"
            },
            {
                seller_id: 2, // make sure user_id=2 exists
                category_id: 4, // Mobiles (child of Electronics)
                title: "iPhone 14 Pro",
                description: "Brand new iPhone sealed box.",
                starting_price: 800.00,
                reserve_price: null,
                buy_now_price: 1200.00,
                start_time: new Date(),
                end_time: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days
                status: "active"
            },
            {
                seller_id: 2, // make sure user_id=2 exists
                category_id: 5, // Paintings (child of Art)
                title: "Oil Painting on Canvas",
                description: "Original oil painting, signed by artist.",
                starting_price: 300.00,
                reserve_price: null,
                buy_now_price: null,
                start_time: new Date(),
                end_time: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days
                status: "active"
            }
        ];

        for (const product of products) {
            const query = `
                INSERT INTO products 
                (seller_id, category_id, title, description, starting_price, reserve_price, buy_now_price, start_time, end_time, status, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
                ON DUPLICATE KEY UPDATE 
                title = VALUES(title),
                description = VALUES(description),
                starting_price = VALUES(starting_price),
                reserve_price = VALUES(reserve_price),
                buy_now_price = VALUES(buy_now_price),
                start_time = VALUES(start_time),
                end_time = VALUES(end_time),
                status = VALUES(status)
            `;

            await promisePool.query(query, [
                product.seller_id,
                product.category_id,
                product.title,
                product.description,
                product.starting_price,
                product.reserve_price,
                product.buy_now_price,
                product.start_time,
                product.end_time,
                product.status
            ]);
        }

        console.log("✅ Products seeded successfully");
        process.exit(0);
    } catch (err) {
        console.error("❌ Error seeding products:", err.message);
        process.exit(1);
    }
}

seedProducts();