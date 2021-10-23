schemasDB:

  Projects:
    code: reqString,
    name: String,
    date: String,
    group: String,
    hotels:[Hotels],
    schedule:[{
      date: String,
      events: [Events],
      lunch: [Restaurants],
      dinner: [Restaurants]
    }]
  
  Hotels:
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
    imageContentUrl: [String]

  Restaurants:
    name: reqString,
    city: String,
    textContent:[String],
    imageContentUrl:[String]

  Events:
    name: reqString,
    city: String,
    titleSideBar: String,
    title: String,
    textContent: [String],
    imageContentUrl: [String]


Endpoints:
  
  projects:

    *GET*
    /projects             (get all projecs)
    /project/:code        (gets one project by code)
    
    *POST*
    /projects             (adds new project)
    /addSchedule/:_id     (adds [Objects] in schedule field in project by _id)
    /resetSchedule/:_id   (resets the schedule field in project by _id)
    /addHotels            (adds [Hotels] in hotels field in project by  _id 
    /resetHotels/:_id     (resets the hotels field in project by _id)

    *DELETE*
    /project/:_id         (deletes the project by _id)

  hotels:

    *GET*
    /hotels               (get all hotels)

    *POST*
    /hotels               (adds new hotel)

    *DELETE*
    /hotels/:_id          (deletes the hotel by _id)

  restaurants:

    *GET*
    /restaurants          (get all restaurants)

    *POST*
    /restaurants          (adds new restaurant)

    *DELETE*
    /restaurants/:_id     (deletes the restaurant by _id)

  events:

    *GET*
    /events               (get all events)

    *POST*
    /events               (adds new event)

    *DELETE*
    /events/:_id          (deletes the event by _id)