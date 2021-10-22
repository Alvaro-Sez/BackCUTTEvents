const Event = require('../model/eventsModel')

const addEvent = async ( req, res) =>{
  try{
    const{
      name,
      titleSideBar,
      title,
      textContent
    } = req.body

    const event = await Event({
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

const updateEvent = async(req, res)=>{
  const id = req.params.id
  try{
    const event = await Event.findById(id)
    const modified = Object.assign(event, req.body)
    console.log(modified, req.body)
    modified.save()
    res.send({data: event})
  } catch{
    res.status(404).send({error: "event not found"})
  }
}

const eventControllers = {
  addEvent,
  getEvents,
  deleteEvent,
  updateEvent
}


module.exports = eventControllers