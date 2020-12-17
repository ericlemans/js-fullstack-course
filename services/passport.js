const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

//Define Google Strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: keys.googleRedirectURI,
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
                const existingUser = await User.findOne({ googleID: profile.id})
                if (existingUser) {
                    console.log('Existing profile ID, created cookie')
                    done(null, existingUser);
                } else  {
                    // we don't have a user with tthis profile ID, create a new user
                    const user = await new User({
                            googleID: profile.id,
                            firstName: profile.name.givenName,
                            lastName: profile.name.familyName,
                            email: profile.emails[0].value
                            }).save();
                    done(null, user);
                }
        }
    ),
);

passport.use(
    new FacebookStrategy(
        {
            clientID: keys.facebookClientID,
            clientSecret: keys.facebookClientSecret,
            callbackURL: '/auth/facebook/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ facebookID: profile.id })
                .then((existingUser) => {
                    if (existingUser) {
                        console.log('Existing Facebook profile ID, created cookie')
                        done(null, existingUser);
                    } else {
                        // we don't have a user with tthis profile ID, create a new user
                        new User({
                            facebookID: profile.id,
                            fullName: profile.displayName
                            }
                        )
                            .save()
                            .then(user => done(null, user));
                    }
                })
        }
    ),
);