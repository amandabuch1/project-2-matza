var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

router.post('/matzas/:id/comments',isLoggedIn, commentsCtrl.create);
router.delete('/matzas/:matzaid/comments/:commentid', commentsCtrl.delComment);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;