const {Project} = require('../model/projectsModel')


const addProject = async ( req, res) =>{
  try{
    const{
      code,
      name,
      date,
      group
    } = req.body
    const project = Project({
      code,
      name,
      date,
      group
    })
    
    const projectStored = await project.save()
    res.status(201).send({projectStored})
  }catch(e){
    res.status(500).send({message: e.message})
  }
}

const getProjects = async ( req, res) =>{
  const projects = await Project.find().lean().exec()
  res.status(200).send({projects})
}

const getOneProject = async ( req, res ) => {
  const id = req.params.id 
  const project = await Project.findOne({code:id})
  res.status(200).send({project})
}


const deleteProject = async ( req, res ) => {
    const id = req.params.id
    try{
      const projectToDelete = await Project.findById(id)
      await projectToDelete.remove()
      res.status(200).send({succes: true})
    } catch(e){
      res.status(404).send({message: e.message})
    }
}

const addScheduleArr = async ( req, res ) => {
  const id = req.params.id
  const scheduleArr = req.body
  try{
    const project = await Project.findById(id)

    scheduleArr.forEach( daySchedule => project.schedule.push(daySchedule) )
    
    const projectUpdated = await project.save()
    res.status(200).send({projectUpdated})
  } catch (e){
    res.status(404).send({message: e.message})
  }
}

const resetScheduleArr = async ( req, res ) => {
  const id = req.params.id
  try{
    const project = await Project.findById(id)
    
    project.schedule = []

    const projectUpdated = await project.save()
    res.status(404).send({projectUpdated})
  } catch (e){
    res.status(404).send({message: e.message})
  }
}

const addHotelsArr = async ( req, res ) =>{
  const id = req.params.id
  const hotelsArr = req.body
  try{
    const project = await Project.findById(id)

    hotelsArr.forEach( hotel =>project.hotels.push(hotel) )
    
    const projectUpdated = await project.save()
    res.status(200).send({projectUpdated})
  } catch (e){
    res.status(404).send({message: e.message})
  }
}

const resetHotelsArr = async (req, res )=>{
  const id = req.params.id
  try{
    const project = await Project.findById(id)
    
    project.hotels = []

    const projectUpdated = await project.save()
    res.status(404).send({projectUpdated})
  } catch (e){
    res.status(404).send({message: e.message})
  }
}

const projectControllers = {
  addProject,
  getProjects,
  deleteProject,
  addScheduleArr,
  resetScheduleArr,
  addHotelsArr,
  resetHotelsArr,
  getOneProject
}

module.exports = projectControllers