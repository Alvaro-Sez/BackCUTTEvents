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


const restaurantControllers = {
  addRestaurant,
  getRestaurants
}


module.exports = restaurantControllers