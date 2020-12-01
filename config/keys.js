//keys.js - figure out what set of credential to return
if (proces.env.NODE_ENV === 'production') {
    //we are in production -return the prod set of keys
    module.exports = require('./prod');
} else {
    //we are in development - return the dev set of keys
    module.exports = require('./dev');
}



