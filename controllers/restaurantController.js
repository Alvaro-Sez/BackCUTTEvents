const Restaurant = require('../model/restaurantModel')


const addRestaurant = async (req, res) => {
  try{
    const{
      name,
      textContent
    } = req.body

    const restaurant = Restaurant({
      name,
      textContent
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

const restaurantControllers = {
  addRestaurant,
  getRestaurants,
  deleteRestaurant
}


module.exports = restaurantControllers