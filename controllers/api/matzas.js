const Matza = require('../../models/matza');


const index = (req, res) => {
    Matza.find()
    .populate('user')
    .exec((err, matzas)=>{
        res.status(200).json(matzas)
    });
};

const create = (req, res) => {
    console.log(req.body);
    console.log(req.user);
    
    Matza.create(req.body).then((matza)=>{
    
        // 201 is the customary for create
        res.status(201).json(matza);

    });
};

const show = (req, res) => {
    Matza.findById(req.params.id).then((matza)=>{
        res.status(200).json(matza)
    });
};

const deleteOne = (req, res) => {
    // Matza.deleteOne({_id:req.params.id})
    // .then((err)=>{
    //     res.redirect('\matza')
    // })

    Matza.findByIdAndRemove(req.params.id).then((matza)=>{
        res.status(200).json(matza);
    });
};

const update = (req, res) =>{
    Matza.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((movie)=>{
        res.status(200).json(movie)
    });
};

module.exports = {
    index,
    create,
    show,
    delete: deleteOne,
    update
}