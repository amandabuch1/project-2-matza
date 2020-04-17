const Matza = require('../models/matza');

const create =(req, res)=>{
  Matza.findById(req.params.id)
  .populate('comments.user')
  .exec(function(err, matza) {
    req.body.user = req.user._id;
    matza.comments.push(req.body);
    matza.save(function(err) {
        res.redirect(`/matzas/${matza._id}`);
    });
  })
}

module.exports = {
  create,
}