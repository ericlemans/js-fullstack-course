// prod.js - production keys here! The keys are hosted in Heroku Env

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    googleRedirectURI: `https://js-fullstack-course.herokuapp.com/auth/google/callback`,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    facebookClientID: '2868429433390855',
    facebookClientSecret: 'f9b8b3dbfcc8ccea783eb856ab26a60a',
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    sendgridKey: process.env.SEND_GRID_KEY,
    redirectDomain: process.env.REDIRECT_DOMAIN,
}