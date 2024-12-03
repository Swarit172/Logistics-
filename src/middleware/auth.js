const auth = (req, res, next) => {
    if (!req.session.user) {
        return res.render('login', {
            error: 'Login to access details.'
        })
    }
    next()
}

module.exports = auth 