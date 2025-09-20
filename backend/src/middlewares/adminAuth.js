// Admin authentication middleware
const adminAuth = (req, res, next) => {
    if (req.session === undefined || req.session.user === undefined || req.session.user.role !== 'admin') {
        return res.redirect('/login');
    }
    next();
}

module.exports = adminAuth;