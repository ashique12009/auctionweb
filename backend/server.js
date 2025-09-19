const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const errorHandler = require('./src/middlewares/error.middleware');
const routes = require('./src/routes');
const app = express();
const PORT = process.env.PORT || 3000;
const session = require('express-session');

// Dependencies
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser('secret'));

// Session setup
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'defaultsecret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false } // Set to true if using HTTPS
    })
);

// Flash messages
app.use(flash());

// expose flash messages to all views as `flash`
app.use((req, res, next) => {
    res.locals.flash = req.flash();
    next();
});

// View engine setup
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "src", "public")));
app.set("views", path.join(__dirname, "src", "views"));

// Use routes
app.use("", routes);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});