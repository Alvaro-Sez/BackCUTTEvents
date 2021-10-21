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

const eventControllers = {
  addEvent,
  getEvents
}


module.exports = eventControllers