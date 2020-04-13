const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    recipes:[{type: Schema.Types.ObjectId, ref: 'Matza'}]
    
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);