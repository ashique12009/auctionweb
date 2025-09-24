const { promisePool } = require("../config/db");

async function createProductImagesTable() {
    const query = `
        CREATE TABLE IF NOT EXISTS product_images (
            image_id INT AUTO_INCREMENT PRIMARY KEY,
            item_id INT NOT NULL,
            image_url TEXT NOT NULL,
            uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (item_id) REFERENCES products(item_id) ON DELETE CASCADE
        ) ENGINE=InnoDB;
    `;
    await promisePool.query(query);
    console.log("✅ Product images table created (if not exists)");
}

async function addImage(itemId, imageUrl) {
    const query = `
        INSERT INTO product_images (item_id, image_url)
        VALUES (?, ?)
    `;
    await promisePool.query(query, [itemId, imageUrl]);
}

async function getImagesByItemId(itemId) {
    const [rows] = await promisePool.query(
        "SELECT * FROM product_images WHERE item_id = ?",
        [itemId]
    );
    return rows;
}

module.exports = {
    createProductImagesTable,
    addImage,
    getImagesByItemId
};