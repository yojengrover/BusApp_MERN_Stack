const mongoose = require('mongoose')
const BusInfoSchema = new mongoose.Schema({
    BusType: { type: String },
    Departure: { type: String },
    Arrival: { type: String },
    TravelDate:{type: Date}, 
    SeatsAvailable: { type: String },
    bookedSeats: { type: String },
    from: { type: String },
    to: { type: String }

})

module.exports = mongoose.model('Info', BusInfoSchema)