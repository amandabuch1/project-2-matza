
const Matza = require('../models/matza');

// const Comment = require('../models/comment');

const create =(req, res)=>{
// //   console.log('!!!!!!!')
//   Matza.findById(req.params.id)
//   .populate('user')
//   .exec(function(err, matza) {
//     console.log(req.body)
//     // req.body.user = req.user._id;
//     Comment.create(req.body)
//     .then((comment)=>{
//         console.log(comment);
//         matza.comments.push(comment);
//     });
//     matza.save(function(err) {
//       res.redirect('/matzas')
//     });
//   })



// BEFORE KYLE
  Matza.findById(req.params.id)
  .populate('comments.user')
  .exec(function(err, matza) {
    // console.log(matza.comments[0].user);
    req.body.user = req.user._id;
    // req.body.userName = req.user.name;
    
    matza.comments.push(req.body);
    matza.save(function(err) {
        res.redirect(`/matzas/${matza._id}`);
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
}

module.exports = {
  create,

}