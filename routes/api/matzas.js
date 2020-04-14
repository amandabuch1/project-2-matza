const express = require('express');
const router = express.Router();


const matzasCtrl = require('../../controllers/api/matzas');

router.get('/', matzasCtrl.index);
router.post('/', matzasCtrl.create);
router.get('/:id', matzasCtrl.show);
router.delete('/:id', matzasCtrl.delete);
router.put('/:id', matzasCtrl.update);


module.exports = router;