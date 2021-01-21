const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
//call UserModel before we call passport.js
require('./models/User');
require('./services/passport');
const axios = require('axios');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useCreateIndex: true });

const app = express();



//Middlewares
app.use(bodyParser.json());
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

// app.get('/', (req, res) => {
//     res.send('This is the index')
// })


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
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === "production") {
    const path = require('path');

    // serve production assets e.g. main.js if route exists
    app.use(express.static(path.resolve(__dirname, "../client/build")));

    // serve index.html if route is not recognized
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);