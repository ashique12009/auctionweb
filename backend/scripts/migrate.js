require("dotenv").config();
const { createUserTable } = require("../src/models/user.model");
const { createCategoryTable } = require("../src/models/category.model");

async function migrate() {
    try {
        await createUserTable();
        await createCategoryTable();
        console.log("✅ Migration completed successfully");
        process.exit(0);
    } catch (err) {
        console.error("❌ Migration failed:", err.message);
        process.exit(1);
    }
}

migrate();