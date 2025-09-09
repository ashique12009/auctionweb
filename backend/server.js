const express = require('express');
const path = require('path');
const errorHandler = require('./src/middlewares/error.middleware');
const routes = require('./src/routes');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// View engine setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "src", "public")));
app.set("views", path.join(__dirname, "src", "views"));

// Use routes
app.use("", routes);

app.get("/", (req, res) => {
    res.render("login");
});

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});