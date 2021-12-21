const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reqString = {
    type:String,
    required: true
};

const TransferSchema = new Schema({
    transfer_in_out : [Number, Number],
    dispo_4h : [Number, Number],
    hextra : [String, Number],
    dispo_5h_fuera : [Number, Number],
    dispo_4h_aeropuerto : [Number, Number],
    dispo_4h_noche : [Number, Number],
    transfer_in_out_noche : [Number, Number],
    dispo_6h_noche : [Number, Number],
    vehicleType: String
})


const Transfer = mongoose.model('transfer', TransferSchema)

module.exports = {
    Transfer,
    TransferSchema
}