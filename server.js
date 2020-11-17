const express = require("express");
const mongoose = require("mongoose"); 
const path = require("path"); 
const emailRouter = require('./serverRouter/email.js')
const PORT = process.env.PORT || 3000; 
const bodyParser = require('body-parser');

// const lgn = process.env.DBPassword || require('./credentials/login.js');
// const dbpsw = process.env.DBLogin || require('./credentials/password.js');

const uri = `mongodb+srv://drgurin:1q2w3e4r@cluster0.kgpfh.mongodb.net/<dbname>?retryWrites=true&w=majority`;
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client')));
app.use(emailRouter); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function start() {
    try {
        mongoose.connect(uri, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useFindAndModify: false
        }); 
        app.listen(PORT, () => {
            console.log(`Server has been started on port: ${PORT}`);
        })
    } catch (error) {
        console.log("!!!! \nERROR:\n",error); 
        throw(error); 
    }
}
start();