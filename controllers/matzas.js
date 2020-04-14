const User = require('../models/user');
const Matza = require('../models/matza');

const index = (req, res) => {
    Matza.find({}, function(err, matzas) {
        res.render('matzas/index',{
            user: req.user,
            name: req.query.name,
            title: 'All Recipes', matzas
        });
    });

};

const show = (req, res) => {
    console.log(req);
    Matza.findById(req.params.id)
    // .populate('recipes').exec(function(err, matza) {
        Matza.find({_id: {$nin: user.recipes}})
        .exec(function(err, matzas) {
            console.log(matzas);
            res.render('matzas/show', {
              title: 'Recipe Detail', user, matzas
            });
        });
    // });
}; 

const newMatza = (req, res) => {
    res.render('matzas/new', { title: 'Add Post' });
};

const create = (req, res) =>{
    // IF NOTHING IN THE KEY DELETE THE KEY
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const matza = new Matza(req.body);
    matza.save(function(err) {
        if (err) return res.redirect('/matzas/new');
        res.redirect(`/matzas`);
    });
};

module.exports = {
    index,
    show,
    new: newMatza,
    create
};