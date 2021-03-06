const {Event} = require('../model/eventsModel')

const addEvent = async ( req, res) =>{
  try{
    const{
      name,
      titleSideBar,
      title,
      textContent
    } = req.body
    console.log(` from here ${name}`)
    const event = Event({
      name,
      titleSideBar,
      title,
      textContent
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



const eventControllers = {
  addEvent,
  getEvents,
  deleteEvent,
}


module.exports = eventControllers