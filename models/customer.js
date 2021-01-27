var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CustomerSchema = new Schema(
    {
        first_name:{type: String, required: true, max:100},
        family_name:{type: String, required: true, max: 100},
        email:{type: String, required: true},
        phone: {type: String}
    }
);

CustomerSchema
.virtual('url')
.get(function(){
    return '/catalog/customer/' + this._id;
});

module.exports = mongoose.model('Customer', CustomerSchema);
