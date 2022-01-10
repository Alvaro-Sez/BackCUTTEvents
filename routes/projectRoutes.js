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
  updateProject
} = require('../controllers/projectControllers')

apiProjects.get('/projects', getProjects)
apiProjects.post('/projects', upload.none(), addProject)
apiProjects.post('/addSchedule/:id', addScheduleArr )
apiProjects.post('/resetSchedule/:id', resetScheduleArr)
apiProjects.post('/addHotels/:id', addHotelsArr )
apiProjects.post('/resetHotels/:id', resetHotelsArr)
apiProjects.delete('/projects/:id', deleteProject)
apiProjects.patch('/projects/:id', upload.none(), updateProject)



module.exports = apiProjects
