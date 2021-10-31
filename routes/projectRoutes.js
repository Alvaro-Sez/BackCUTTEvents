const express = require('express')
const apiProjects = express.Router()
const upload = require('multer')()
const {
  addProject,
  getProjects,
  deleteProject,
  addScheduleArr,
  resetScheduleArr,
  addHotelsArr,
  resetHotelsArr,
  getOneProject
} = require('../controllers/projectControllers')

apiProjects.get('/projects', getProjects)
apiProjects.post('/projects', upload.none(), addProject)
apiProjects.post('/addSchedule/:id', addScheduleArr )
apiProjects.post('/resetSchedule/:id', resetScheduleArr)
apiProjects.post('/addHotels/:id', addHotelsArr )
apiProjects.post('/resetHotels/:id', resetHotelsArr)
apiProjects.delete('/project/:id', deleteProject)



module.exports = apiProjects
