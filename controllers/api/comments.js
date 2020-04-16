const User = require('../../models/user');
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


  // WORKING BUT NOT ADDING ID
  // Matza.findById(req.params.id, function(err, matza){
  //   matza.comments.push(req.body);
  //   console.log(req.body);
  //   console.log(user)
  //   // req.body.user = req.user._id;
  //   matza.save(function(err) {
  //     res.send(matza);
  //   });
  // })

  // req.body.user = req.user._id;
  // console.log('!!!!!!!!!!', req.body.user)
  // populate('user')
  // .then(function(err, comments){
  
  // })
  
    // Matza.findById(req.params.id, function(err, matza) {
    //   console.log("console.log(matza)", matza);
    //   res.send(matza);
    // });
}



module.exports = {
  create,

}
// function create(req, res) {
//   Movie.findById(req.params.id, function(err, movie) {
//     movie.reviews.push(req.body);
//     movie.save(function(err) {
//       res.redirect(`/movies/${movie._id}`);
//     });
//   });
// }