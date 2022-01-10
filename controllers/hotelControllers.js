const {Hotel} = require('../model/hotelModel')

const addHotel = async(req,res)=> {
  try{
    const {
      name,
      city,
      direction,
      numberStars,
      numberRooms,
      checkin_out,
      meetingRooms,
      wheelChairAccesible,
      wifiSpeed,
      swimmingPool,
      restaurants,
      textContent,
      coordinates,
      introduction
    } = req.body 

    const hotel = Hotel({
      name,
      city,
      direction,
      numberStars,
      numberRooms,
      checkin_out,
      meetingRooms,
      wheelChairAccesible,
      wifiSpeed,
      swimmingPool,
      restaurants,
      textContent,
      coordinates,
      introduction
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

const updateHotel = async (req, res )=> {
  const { id } = req.params
  const changes = req.body
  try{
    if(id.length < 24) {
      return res.status(500).send({message: 'wrong id mongo object'})
    }
    const hotel = await Hotel.findById(id)
    if(!hotel){
      return res.status(404).send({message: 'hotel not found'})
    }
    
    Object.assign(hotel, changes)

    const hotelUpdated = await hotel.save()

    res.status(200).send({hotelUpdated})

  } catch (e) {
    console.log(e)
    res.status(500).send({message:'error updating the hotel'})
  }
}


const hotelControllers = {
  addHotel,
  getHotels,
  deleteHotel,
  updateHotel
}


module.exports = hotelControllers