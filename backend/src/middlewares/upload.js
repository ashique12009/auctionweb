const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Absolute path to the uploads directory
const uploadPath = path.join(__dirname, '../public/uploads');

// Ensure the uploads directory exists
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

// Storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath); // save into 'public/uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // unique filename
    }
});

// File filter (only images)
function fileFilter(req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed!"), false);
    }
}

const upload = multer({ storage, fileFilter });

module.exports = upload;