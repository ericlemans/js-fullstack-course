const passport = require('passport');

module.exports = (app) => {
    //Send request for the code to google
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    //Receive code and let passport exchange auth process
    app.get('/auth/google/callback', passport.authenticate('google'));


    //Facebook oAuth
    app.get('/auth/facebook', passport.authenticate('facebook', ));
    app.get('/auth/facebook/callback', passport.authenticate('facebook'));



    //LOGOUT
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    //Authenticate oAuth
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
        }
    )

}

