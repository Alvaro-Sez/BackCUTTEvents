const {Event} = require('../model/eventsModel')

const addEvent = async ( req, res) =>{
  try{
    const{
      name,
      city,
      titleSideBar,
      title,
      horario,
      textContent,
      price,
      coordinates,
      introduction
    } = req.body
    const event = Event({
      name,
      city,
      titleSideBar,
      title,
      horario,
      textContent,
      price,
      coordinates,
      introduction
    })
    if(req.files){
      const { files } = req
      event.setImgUrl(files)  
    }
    const eventStored = await event.save()
    res.status(201).send({eventStored})
  }catch(e){
    res.status(500).send({message: e.message})
  }
}

const getEvents = async (req, res) =>{
  const events = await Event.find().lean().exec()
  res.status(200).send({events})
}

const deleteEvent = async(req, res) =>{
  const id = req.params.id
  try {
    const eventToDelete = await Event.findById(id)
    await eventToDelete.remove()
    res.status(200).send({success:true})
  } catch(e){
    res.status(404).send({message:e.message})
  }
}
const updateEvent = async (req, res )=> {
  const { id } = req.params
  const changes = req.body
  try{
    if(id.length < 24) {
      return res.status(500).send({message: 'wrong id mongo object'})
    }
    const event = await Event.findById(id)
    if(!event){
      return res.status(404).send({message: 'event not found'})
    }
    
    Object.assign(event, changes)

    const eventUpdated = await event.save()

    res.status(200).send({eventUpdated})

  } catch (e) {
    console.log(e)
    res.status(500).send({message:'error updating the event'})
  }
}



const eventControllers = {
  addEvent,
  getEvents,
  deleteEvent,
  updateEvent
}


module.exports = eventControllers