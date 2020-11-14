const {Router} = require("express"); 
// const imageModel = require('./../models/imageModel.js'); 
const router = Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', async (req,res) => {
    res.render('index',);
})

router.post('/create', async (req, res) => {
    let newEmail = req.body.newEmail; 
    console.log(newEmail);
    await res.send(newEmail)
})

module.exports = router;