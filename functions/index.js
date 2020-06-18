const functions = require('firebase-functions');

exports.helloMedium= functions.https.onRequest((req, res) => {
 response.send("Hello from Medium!");
});
