// prod.js - production keys here! The keys are hosted in Heroku Env

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    facebookClientID: '2868429433390855',
    facebookClientSecret: 'f9b8b3dbfcc8ccea783eb856ab26a60a',
}