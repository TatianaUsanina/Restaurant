var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReservationSchema = new Schema(
    {
        tableinstance: {
            type: Schema.ObjectId,
            ref: 'TableInstance',
            required: true
        },
        customer: {
            type: Schema.ObjectId,
            ref: 'Customer',
            required: true
        },
        date: Date
    }
);

ReservationSchema
.virtual('url')
.get(function(){
    return '/catalog/reservation/' + this._id;
});

module.exports = mongoose.model('Reservation', ReservationSchema);
