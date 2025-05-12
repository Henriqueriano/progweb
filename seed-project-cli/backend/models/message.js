const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        content: {type: String, required: true},
        username: {type: String, require: true},
        user: {type: Schema.Types.ObjectId, ref: 'User'}
    });

module.exports = mongoose.model('Message', schema);
