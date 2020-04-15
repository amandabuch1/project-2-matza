const Matza = require('../../models/matza');


function create(req, res) {
    Matza.findById(req.params.id, function(err, matza) {
      console.log("console.log(matza)", matza);
      res.send(matza);
      // matza.comments.push(req.body);
      // matza.save(function(err){
      //   res.send(matza);
      // })
    
      // matza.comments.push(req.body);
      // matza.save(function(err) {
      //   res.redirect(`/matzas/${matza._id}`);
      // });
    });
}

module.exports = {
  create,

}