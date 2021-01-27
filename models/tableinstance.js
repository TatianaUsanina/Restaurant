var mongoose = require('mongoose');
const table = require('./table');

var Schema = mongoose.Schema;

var TableInstanceSchema = new Schema(
    {
        number: {
            type: Number,
            min: 1,
            max: 12,
            required: true
        },
        location: {
            type: String,
            enum: ['Window', 'Wall', 'Center'],
            required: true
        },
        table:{
            type: Schema.ObjectId, 
            ref: 'Table', 
            required: true
        }
});

TableInstanceSchema
.virtual('url')
.get(function(){
    return '/catalog/tableinstance/' + this._id;
});

module.exports = mongoose.model('TableInstance', TableInstanceSchema);
