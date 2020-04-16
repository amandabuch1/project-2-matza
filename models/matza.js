const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    comment: String,
},
{
    timestamps: true
});

const matzaSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
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

    // comments: [{
    //     type: Schema.Types.ObjectId, 
    //     ref: 'Comment'
    // }],


},{
    timestamps: true
});

module.exports = mongoose.model('Matza', matzaSchema);