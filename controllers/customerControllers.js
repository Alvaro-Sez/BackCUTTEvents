const {Customer} = require('../model/customerModel')


const addCustomer = async ( req, res) =>{
  try{
    const{
      id,
      name,
      date,
      group
    } = req.body
    console.log(req.body)
    const customer = Customer({
      id,
      name,
      date,
      group
    })
    
    const customerStored = await customer.save()
    res.status(201).send({customerStored})
  }catch(e){
    res.status(500).send({message: e.message})
  }
}

const getCustomers = async ( req, res) =>{
  const customers = await Customer.find().lean().exec()
  res.status(200).send({customers})
}

const getOneCustomer = async ( req, res ) => {
  const id = req.params.id 
  const customer = await Customer.findOne({id:id})
  res.status(200).send({customer})
}


const deleteCustomer = async ( req, res ) => {
    const id = req.params.id
    try{
      const customerToDelete = await Customer.findById(id)
      await customerToDelete.remove()
      res.status(200).send({succes: true})
    } catch(e){
      res.status(404).send({message: e.message})
    }
}

const addScheduleObj = async ( req, res ) => {
  const id = req.params.id
  const scheduleObj = req.body
  try{
    const customer = await Customer.findById(id)
    console.log(customer)
    customer.schedule.push(scheduleObj)
    const customerUpdated = await customer.save()
    res.status(200).send({customerUpdated})
  } catch (e){
    res.status(404).send({message: e.message})
  }
}

const addHotelsArray = async ( req, res ) =>{
  const id = req.params.id
  const hotelsArr = req.body
  try{
    const customer = await Customer.findById(id)

    hotelsArr.forEach( hotel=>customer.hotels.push(hotel) )
    
    const customerUpdated = await customer.save()
    res.status(200).send({customerUpdated})
  } catch (e){
    res.status(404).send({message: e.message})
  }
}

const customerControllers = {
  addCustomer,
  getCustomers,
  deleteCustomer,
  addScheduleObj,
  addHotelsArray,
  getOneCustomer
}

module.exports = customerControllers