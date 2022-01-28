const {Project} = require('../model/projectsModel')


const addProject = async ( req, res) =>{
  try{
    const{
      code,
      accountManager,
      groupName,
      groupLocation,
      arrivalDay,
      departureDay,
      nrPax,
      clientCo,
      clientAccManager,
    } = req.body
    const project = Project({
      code,
      accountManager,
      groupName,
      groupLocation,
      arrivalDay,
      departureDay,
      nrPax,
      clientCo,
      clientAccManager,
    })
    
    const projectStored = await project.save()
    res.status(201).send({projectStored})
  }catch(e){
    console.log(e)
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
    console.log(e)
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
    console.log(e)
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
    console.log(e)
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
    console.log(e)
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
    console.log(e)
    res.status(404).send({message: e.message})
  }
}

const updateProject = async (req, res )=> {
  const { id } = req.params
  const changes = req.body
  console.log(id,changes)
  try{
    if(id.length < 24) {
      return res.status(500).send({message: 'wrong id mongo object'})
    }
    const project = await Project.findById(id)
    console.log(`this is the proejct ${project}`)
    if(!project){
      return res.status(404).send({message: 'project not found'})
    }
    
    Object.assign(project, changes)

    const projectUpdated = await project.save()

    res.status(200).send({projectUpdated})

  } catch (e) {
    console.log(e)
    res.status(500).send({message:'error updating the project'})
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
  getOneProject,
  updateProject
}

module.exports = projectControllers