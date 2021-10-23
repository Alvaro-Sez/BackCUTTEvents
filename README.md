##schemasDB:
<code>
  #PROJECTS
 
    code: reqString,<br/>
    name: String,<br/>
    date: String,<br/>
    group: String,<br/>
    hotels:[Hotels],<br/>
    schedule:[<br/>
      {<br/>
      date: String,<br/>
      events: [Events],<br/>
      lunch: [Restaurants],<br/>
      dinner: [Restaurants]<br/>
      }
    ]
 
  #HOTELS
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
    imageContentUrl: [String]  (name images when post)

  #RESTAURANTS
    name: reqString,
    city: String,
    textContent:[String],
    imageContentUrl: [String]  (name images when post)

  #EVENTS
    name: reqString,
    city: String,
    titleSideBar: String,
    title: String,
    textContent: [String],
    imageContentUrl: [String]  (name images when post)
 </code>

##Endpoints:
  
  projects:

    *GET*
    /projects             (get all projecs) <!-- works -->
    /project/:code        (gets one project by code) <!-- works -->
    
    *POST*
    /projects             (adds new project) <!-- works -->
    /addSchedule/:_id     (adds [Objects] in schedule field in project by _id) <!-- works -->
    /resetSchedule/:_id   (resets the schedule field in project by _id) <!-- works -->
    /addHotels/:_id       (adds [Hotels] in hotels field in project by  _id) <!-- works --> 
    /resetHotels/:_id     (resets the hotels field in project by _id) <!-- works -->

    *DELETE*
    /project/:_id         (deletes the project by _id) <!-- works -->

  hotels:

    *GET*
    /hotels               (get all hotels) <!-- works -->

    *POST*
    /hotels               (adds new hotel) <!-- works -->

    *DELETE*
    /hotels/:_id          (deletes the hotel by _id) <!-- works -->

  restaurants:

    *GET*
    /restaurants          (get all restaurants) <!-- works -->

    *POST*
    /restaurants          (adds new restaurant) <!-- works -->

    *DELETE*
    /restaurants/:_id     (deletes the restaurant by _id) <!-- works -->

  events:

    *GET*
    /events               (get all events) <!-- works -->

    *POST*
    /events               (adds new event) <!-- works -->

    *DELETE*
    /events/:_id          (deletes the event by _id) <!-- works -->
