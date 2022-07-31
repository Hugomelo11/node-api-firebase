const functions = require("firebase-functions")  // importing firebase function we created in terminal
const express = require("express")   // importing express api
const cors = require("cors")   // importing cors 

const app = express()  // exporting the cloud function
app.use(cors());

app.get('/test', (req, res) => {
    res.send('Hooray, it works!')
});

exports.app = functions.https.onRequest(app);
