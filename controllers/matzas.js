const Matza = require('../models/matza');

const index = (req, res) => {
    Matza.find()
    // showing entire user object including name field
    .populate('user')
    .exec(function(err, matzas) {
        console.log(matzas);
        res.render('matzas/index',{
            user: req.user,
            name: req.query.name,
            title: 'All Recipes', 
            matzas
        });
    });

};

const newMatza = (req, res) => {
    console.log(req.User)
    res.render('matzas/new', { title: 'Add Post' });
};

const show = (req, res) => {
    Matza.findById(req.params.id)
    .populate('comments.user')
    .exec(function(err, matza) {
        // res.send(matza)
        res.render('matzas/show', { title: 'Details', matza });
    });
}; 

const create = (req, res) =>{
    // IF NOTHING IN THE KEY DELETE THE KEY
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    // FED USER ID TO THE MATZA whic loged the id in the new matza
    req.body.user = req.user._id;

    
    // create a new matza
    const matza = new Matza(req.body);


    
    // save the new matza to the database
    matza.save(function(err) {
        
        if (err) return res.redirect('/matzas/new');
        // redirect to matza index page
        res.redirect(`/matzas`);
        
    })
};

const update = (req, res) =>{

};

const delMatza = (req, res) =>{
    console.log('hit delete')
    Matza.deleteOne({_id:req.params.id})
    .then((err)=>{
        res.redirect('/matzas');
    })
};

module.exports = {
    index,
    show,
    new: newMatza,
    create,
    update,
    delMatza,
};