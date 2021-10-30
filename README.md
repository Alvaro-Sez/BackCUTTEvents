schemasDB:
~~~
 PROJECTS:
 
project{
  code: String,
  accountManager: String,
  groupName: String,
  groupLocation: String,
  arrivalDay: String,
  departureDay: String,
  nrPax: Number,
  clientCo: String,
  clientAccManager: String,
  hotels:[Hotels],
  schedule:[
    {
    date: String,
    events: [Events],
    lunch: [Restaurants],
    dinner: [Restaurants]
    }
  ]
}
~~~
~~~  
  HOTELS:
  
 hotel{ 
    name: reqString,
    city: String,
    hotelInfo:{
      direction: String,
      numberStars: Number,
      numberRooms: Number,
      checkin_out: String,
      meetingRooms: String,
      wheelChairAccesible: Boolean,
      wifiSpeed: String,
      swimmingPool: String,
      restaurants: String
    },  
    textContent: [String],
    imageContentUrl: [String]  (key:images when post)
  }
~~~
~~~  
  RESTAURANTS:
  
  restaurant{
    name: reqString,
    city: String,
    textContent:[String],
    imageContentUrl: [String]  (key:images when post)
  }
~~~   
~~~  
  EVENTS:
  
  event{
    name: reqString,
    city: String,
    titleSideBar: String,
    title: String,
    textContent: [String],
    imageContentUrl: [String]  (key: images when post)
   }
~~~ 

Endpoints:
~~~   
  login:
  
   *POST*
   /login                 (grants access)
~~~  
  
  projects:

    *GET*
    /projects             (get all projecs) 
    /project/:code        (gets one project by code) 
    
    *POST*
    /projects             (adds new project)  type: form-data
    /addSchedule/:_id     (adds [Object] in project.schedule by project _id) type: json
    /resetSchedule/:_id   (resets the schedule field in project by _id) 
    /addHotels/:_id       (adds [Hotels] in project.hotels by project _id) type: json
    /resetHotels/:_id     (resets the hotels field in project by _id) 

    *DELETE*
    /project/:_id         (deletes the project by _id) 

  hotels:

    *GET*
    /hotels               (get all hotels) 

    *POST*
    /hotels               (adds new hotel) type: form-data (12 images max)

    *DELETE*
    /hotels/:_id          (deletes the hotel by _id)

  restaurants:

    *GET*
    /restaurants          (get all restaurants) 

    *POST*
    /restaurants          (adds new restaurant)  type: form-data (12 images max)

    *DELETE*
    /restaurants/:_id     (deletes the restaurant by _id) 

  events:

    *GET*
    /events               (get all events) 

    *POST*
    /events               (adds new event) type: form-data (12 images max)

    *DELETE*
    /events/:_id          (deletes the event by _id) 
