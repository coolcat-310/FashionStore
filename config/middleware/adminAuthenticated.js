module.exports = function (req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
        if (req.user.admin) {
            return next();
        }
        return res.redirect("/");
    }
    // If the user isnt' logged in, redirect them to the login page
    return res.redirect("/");
};