const Matza = require('../../models/matza');

const create =(req, res)=>{
  
  Matza.findById(req.params.id)
  .populate('user')
  .exec(function(err, matza) {
    console.log(req.body)
    // req.body.user = req.user._id;
    matza.comments.push(req.body);
    matza.save(function(err) {
      res.send(matza);
    });
  })
}



module.exports = {
  create,

}
