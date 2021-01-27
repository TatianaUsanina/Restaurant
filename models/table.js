var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TableSchema = new Schema(
    {
       seats: {
           type: Number,
           min: 2,
           max: 8,
           require: true
       }

    }
);

TableSchema
.virtual('url')
.get(function(){
    return '/catalog/table/' + this._id;
});

module.exports = mongoose.model('Table', TableSchema);