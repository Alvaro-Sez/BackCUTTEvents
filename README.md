schemasDB:
~~~
 PROJECTS

  code: reqString,
  name: String,
  date: String,
  group: String,
  hotels:[Hotels],
  schedule:[
    {
    date: String,
    events: [Events],
    lunch: [Restaurants],
    dinner: [Restaurants]
    }
  ]
~~~
~~~  
  HOTELS
  
    name: reqString,
    city: String,
    hotelInfo:{
      direction: String,
      numberStars: Number,
      numberRooms: Number,
      checkin_out: String,
      meetingRooms: String,
      WheelChariAccesible: Boolean,
      wifiSpeed: String,
      swimmingPool: String,
      restaurants: String
    },  
    textContent: [String],
    imageContentUrl: [String]  (key:images when post)
~~~
~~~  
  RESTAURANTS
  
    name: reqString,
    city: String,
    textContent:[String],
    imageContentUrl: [String]  (key:images when post)

  EVENTS
  
    name: reqString,
    city: String,
    titleSideBar: String,
    title: String,
    textContent: [String],
    imageContentUrl: [String]  (key: images when post)
~~~ 

Endpoints:
  
  projects:

    *GET*
    /projects             (get all projecs) 
    /project/:code        (gets one project by code) 
    
    *POST*
    /projects             (adds new project)  type: form-data
    /addSchedule/:_id     (adds [Objects] in project.schedule by project _id) type: json
    /resetSchedule/:_id   (resets the schedule field in project by _id) 
    /addHotels/:_id       (adds [Hotels] in project.hotels by project _id) type: json
    /resetHotels/:_id     (resets the hotels field in project by _id) 

    *DELETE*
    /project/:_id         (deletes the project by _id) 

  hotels:

    *GET*
    /hotels               (get all hotels) 

    *POST*
    /hotels               (adds new hotel) type: form-data 

    *DELETE*
    /hotels/:_id          (deletes the hotel by _id)

  restaurants:

    *GET*
    /restaurants          (get all restaurants) 

    *POST*
    /restaurants          (adds new restaurant)  type: form-data 

    *DELETE*
    /restaurants/:_id     (deletes the restaurant by _id) 

  events:

    *GET*
    /events               (get all events) 

    *POST*
    /events               (adds new event) type: form-data 

    *DELETE*
    /events/:_id          (deletes the event by _id) 
