const Hotel = require('../model/hotelModel')

const addHotel = async(req,res)=> {
  try{
    const {
      name,
      hotelInfo,
      textContent,
    } = req.body 

    const hotel = Hotel({
      name,
      hotelInfo,
      textContent
    })
    if(req.files){
      const { files } = req
      hotel.setImgUrl(files)
    }
    const hotelStored = await hotel.save()
    res.status(201).send({ hotelStored})
  } catch(e){
    res.status(500).send({message: e.message})
  }
}

const getHotels = async (req, res) => {
  const hotels = await Hotel.find().lean().exec()
  res.status(200).send({hotels})
}

const deleteHotel = async(req, res) =>{
  try {
    const id = req.params.id
    const hotelToDelete = await Hotel.findById(id)
    await hotelToDelete.remove()
    res.status(200).send({success:true})
  } catch(e){
    res.status(404).send({message:e.message})
  }
}

const hotelControllers = {
  addHotel,
  getHotels,
  deleteHotel
}


module.exports = hotelControllers