const {Router} = require("express"); 
const newEmail = require('../models/newEmail.js'); 
const donator = require('../models/donator.js'); 
const router = Router();
const bodyParser = require('body-parser');
const VALIDATOR = require("email-validator");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', async (req,res) => {
    res.render('index',);
})

router.get('/create', async (req,res) => {
    newEmail.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

router.post('/create', async (req, res) => {
    if(VALIDATOR.validate(req.body.newEmail)) {
        newEmail.findOne({ email: req.body.newEmail }).then(email => {
            if (email) {
                return res.status(400).json({ email: "Email already exists" });
            } else {
                const myEmail = new newEmail({
                  email: req.body.newEmail,
                });
                myEmail.save();
                res.send(newEmail)
            }
        });
    }
    else {
        return res.status(400).json({ email: "Email not real" });
    }
})

router.get('/donate', async (req,res) => {
    donator.find()
        .exec()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

router.post('/donate', async (req, res) => {
    const mydonator = new donator({
        email: req.body.donateEmail,
        wallet: req.body.donateWallet
    });
    if(VALIDATOR.validate(req.body.donateEmail)) { 
        mydonator.save();
        res.send(mydonator)   
    }
    else {
        console.log('ERROR: email not real')
        return res.status(400).json({ email: "Email not real" });
    }
})

module.exports = router;