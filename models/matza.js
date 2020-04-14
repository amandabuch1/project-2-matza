const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: String,
},
{
    timestamps: true
});

const matzaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: String,
    comments: [commentSchema],
    


},{
    timestamps: true
});

module.exports = mongoose.model('Matza', matzaSchema);