const passport = require('passport');

module.exports = (app) => {
    //Send request for the code to google
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    //Receive code and let passport exchange auth process
    app.get('/auth/google/callback', passport.authenticate('google'));

}

