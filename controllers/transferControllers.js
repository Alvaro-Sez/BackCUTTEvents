const { Transfer }= require('../model/transferModel')

const addTransfer = async (req, res) => {
    try {
        const {
            city,
            company,
            transfer_in_out,
            dispo_4h,
            hextra,
            hextra_night,
            dispo_5h_out,
            dispo_4h_airport,
            dispo_4h_night,
            transfer_in_out_night,
            dispo_6h_night,
            vehicleType,
            vehicleCapacity
        } = req.body

        const transfer = Transfer({
            city,
            company,
            transfer_in_out,
            dispo_4h,
            hextra,
            hextra_night,
            dispo_5h_out,
            dispo_4h_airport,
            dispo_4h_night,
            transfer_in_out_night,
            dispo_6h_night,
            vehicleType,
            vehicleCapacity
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

const updateTransfer = async (req, res )=> {
    const { id } = req.params
    const changes = req.body
    try{
      if(id.length < 24) {
        return res.status(500).send({message: 'wrong id mongo object'})
      }
      const transfer = await Transfer.findById(id)
      if(!transfer){
        return res.status(404).send({message: 'transfer not found'})
      }
      
      Object.assign(transfer, changes)
  
      const transferUpdated = await transfer.save()
  
      res.status(200).send({transferUpdated})
  
    } catch (e) {
      console.log(e)
      res.status(500).send({message:'error updating the transfer'})
    }
  }

const transferControllers = {
    addTransfer,
    getTransfers,
    deleteTransfer,
    updateTransfer
}

module.exports = transferControllers