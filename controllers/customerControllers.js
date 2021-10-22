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

const customerControllers = {
  addCustomer,
  getCustomers 
}

module.exports = customerControllers