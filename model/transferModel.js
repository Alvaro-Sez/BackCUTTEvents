const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reqString = {
    type:String,
    required: true
};

const TransferSchema = new Schema({
    city: String,
    company: String,
    transfer_in_out : [Number, Number],
    dispo_4h : [Number, Number],
    hextra : [String, Number],
    dispo_5h_out : [Number, Number],
    dispo_4h_airport : [Number, Number],
    dispo_4h_night : [Number, Number],
    transfer_in_out_night : [Number, Number],
    dispo_6h_night : [Number, Number],
    vehicleType: String
})


const Transfer = mongoose.model('transfer', TransferSchema)

module.exports = {
    Transfer,
    TransferSchema
}