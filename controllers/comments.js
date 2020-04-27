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


const delComment = (req, res) =>{
  console.log(req.params);
  Matza.findById(req.params.matzaid)
  .exec(function(err, matza){
    // https://mongoosejs.com/docs/2.7.x/docs/embedded-documents.html
    // individual matza. comments array in matza. id(specific comment in array. remove removes it when button is clicked )
    matza.comments.id(req.params.commentid).remove();
    // Save updated matza and redirect to the same page
    matza.save(function(err) {
      res.redirect(`/matzas/${matza._id}`);
    });
  })
  
};

module.exports = {
  create,
  delComment,
}