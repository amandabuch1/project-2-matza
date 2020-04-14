var express = require('express');
var router = express.Router();
var commentsCtrl = require('../../controllers/api/comments');

router.post('/:id/comments', commentsCtrl.create);

module.exports = router;