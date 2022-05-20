const {Router} = require('express');
const controollerUsers = require('./src/controller/users');

const router = Router();
 router.get('/user',controollerUsers.get);
 router.post('/user',controollerUsers.post);

 module.exports = router