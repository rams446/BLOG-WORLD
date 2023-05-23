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

router.post(`/homepage/:id/edit`, blogCtrl.editblog);

router.post(`/homepage/:id`, blogCtrl.deleteblog);
router.get('/homepage', blogCtrl.allblog);

module.exports = router;