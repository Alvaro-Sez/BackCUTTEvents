const { Transfer }= require('../model/transferModel')

const addTransfer = async (req, res) => {
    try {
        const {
            transfer_in_out,
            dispo_4h,
            hextra,
            dispo_5h_fuera,
            dispo_4h_aeropuerto,
            dispo_4h_noche,
            transfer_in_out_noche,
            dispo_6h_noche,
            vehicleType
        } = req.body

        const transfer = Transfer({
            transfer_in_out,
            dispo_4h,
            hextra,
            dispo_5h_fuera,
            dispo_4h_aeropuerto,
            dispo_4h_noche,
            transfer_in_out_noche,
            dispo_6h_noche,
            vehicleType
        })
        
        const transferStored = await transfer.save()
        res.status(201).send({ transferStored })
    } catch (e) {
        res.status(500).send({ message: e.message })
    }
}

const getTransfers = async (req, res) => {
    const transfers = await Transfer.find().lean().exec()
    res.status(200).send({ transfers })
}

const deleteTransfer = async(req, res) => {
    try {
        const id = req.params.id
        const transferToDelete = await Transfer.findById(id)
        await transferToDelete.remove()
        res.status(200).send({ success: true })
    } catch (e) {
        res.status(404).send({ message: e.message })
    }
}

const transferControllers = {
    addTransfer,
    getTransfers,
    deleteTransfer
}

module.exports = transferControllers