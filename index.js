const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//call UserModel before we call passport.js
require('./models/User');
require('./services/passport');
const axios = require('axios');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useCreateIndex: true });

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})



app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
    console.log('user disconnected');
});



const teams = "teams/C7ntxaoB8wkAjtLMd/";
const databases = "databases/b6n6iuba9536/"
const url = "https://api.ninoxdb.de/v1/" + teams + databases;
const ninoxKey = `Bearer 3eaefb80-360a-11eb-8109-f1462b52f985`;

app.get('/test', (req, res) => {
    axios.get(url, {headers: {'Authorization': ninoxKey, 'content-type': 'application/json'}})
        .then(response => {
            console.log(response.data);
            res.send('See console')
        }
    );
});




//calls the function hosted on /routes/authRoutes.js
require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);