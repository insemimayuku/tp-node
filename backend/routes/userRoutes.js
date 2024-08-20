const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Route pour obtenir tous les utilisateurs
router.get('/login' , userController.getAllUsers);
router.get('/register', userController.getUserById);

router.post('/register', userController.Register);

module.exports = router;