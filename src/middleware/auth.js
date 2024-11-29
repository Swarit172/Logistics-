const authMiddleware = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login?error=Please log in to access this page');
    }
    next();
}