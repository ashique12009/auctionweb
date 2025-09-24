require("dotenv").config();
const { createUserTable } = require("../src/models/user.model");
const { createCategoryTable } = require("../src/models/category.model");
const { createProductsTable } = require("../src/models/product.model");
const { createProductImagesTable } = require("../src/models/productImage.model");

async function migrate() {
    try {
        await createUserTable();
        await createCategoryTable();
        await createProductsTable();
        await createProductImagesTable();
        console.log("✅ Migration completed successfully");
        process.exit(0);
    } catch (err) {
        console.error("❌ Migration failed:", err.message);
        process.exit(1);
    }
}

migrate();