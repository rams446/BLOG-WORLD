const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const blogCtrl = require('../../controllers/api/blog');

// POST /api/users
router.post('/', usersCtrl.create);

// POST /api/users/login
router.post('/login', usersCtrl.login);

// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);

router.post('/homepage/myblogs', blogCtrl.create);

router.get('/homepage/myblogs/:email',blogCtrl.blog);

// router.post(`/homepage/myblogs/:id/edit`, blogCtrl.editblog);

module.exports = router;