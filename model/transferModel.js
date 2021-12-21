const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reqString = {
    type:String,
    required: true
};

const TransferSchema = new Schema({
    city: String,
    company: String,
    transfer_in_out : Number,
    dispo_4h :  Number,
    hextra : Number,
    hextra_night: Number,
    dispo_5h_out : Number,
    dispo_4h_airport : Number,
    dispo_4h_night :  Number,
    transfer_in_out_night :  Number,
    dispo_6h_night : Number,
    vehicleType: String,
    vehicleCapacity: Number
})


const Transfer = mongoose.model('transfer', TransferSchema)

module.exports = {
    Transfer,
    TransferSchema
}