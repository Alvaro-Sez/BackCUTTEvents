const {Restaurant} = require('../model/restaurantModel')


const addRestaurant = async (req, res) => {
  try{
    const{
      name,
      city,
      textContent,
      price,
      coordinates,
      introduction
    } = req.body

    const restaurant = Restaurant({
      name,
      city,
      textContent,
      price,
      coordinates,
      introduction
    })
    if(req.files){
      const { files } = req
      restaurant.setImgUrl(files)
    }
    const restaurantStored = await restaurant.save()
    res.status(201).send({ restaurantStored })
  } catch(e){
    res.status(500).send({message: e.message})
  }
}

const getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find().lean().exec()
  res.status(200).send({restaurants})
}

const deleteRestaurant = async(req, res) =>{
  try {
    const id = req.params.id
    const restaurantToDelete = await Restaurant.findById(id)
    await restaurantToDelete.remove()
    res.status(200).send({success:true})
  } catch(e){
    res.status(404).send({message:e.message})
  }
}

const updateRestaurant = async (req, res )=> {
  const { id } = req.params
  const changes = req.body
  try{
    if(id.length < 24) {
      return res.status(500).send({message: 'wrong id mongo object'})
    }
    const restaurant = await Restaurant.findById(id)

    if(!restaurant){
      return res.status(404).send({message: 'restaurant not found'})
    }
    
    Object.assign(restaurant, changes)

    const restaurantUpdated = await restaurant.save()

    res.status(200).send({restaurantUpdated})

  } catch (e) {
    console.log(e)
    res.status(500).send({message:'error updating the restaurant'})
  }
}

const restaurantControllers = {
  addRestaurant,
  getRestaurants,
  deleteRestaurant,
  updateRestaurant
}


module.exports = restaurantControllers