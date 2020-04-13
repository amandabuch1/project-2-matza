const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matzaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: String,

},{
    timestamps: true
});

module.exports = mongoose.model('Matza', matzaSchema);