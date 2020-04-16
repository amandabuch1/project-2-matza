var express = require('express');
var router = express.Router();

var matzasCtrl = require('../controllers/matzas');

router.get('/', matzasCtrl.index);
router.get('/new', matzasCtrl.new);
router.get('/:id', matzasCtrl.show);
router.post('/', matzasCtrl.create);
// router.put('/:id', matzasCtrl.update);
router.delete('/:id', matzasCtrl.delMatza);
module.exports = router;