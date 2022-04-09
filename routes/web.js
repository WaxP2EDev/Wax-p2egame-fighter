const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/HomeController');
const AuthController = require('../app/controllers/AuthController');

router.get('/', HomeController.homePage);
router.get('/fight', HomeController.fightPage);

router.post('/addresource', HomeController.addResource);
router.get('/getResource', HomeController.getResource);
router.post('/updateResource', HomeController.updateResource);
router.post('/fight/addresource', HomeController.addResource);
router.get('/fight/getResource', HomeController.getResource);
router.post('/fight/updateResource', HomeController.updateResource);

module.exports = router;