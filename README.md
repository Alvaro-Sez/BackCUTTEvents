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
    morningEvents: [EventSchema],
    afternoonEvents: [EventSchema],
    lunch: [Restaurants],
    dinner: [Restaurants],
    transfer_in_out:[TransferSchema]
    }
  ]
}
~~~
~~~  
  HOTELS:
  
 hotel{ 
    name: reqString,
    city: String,
    direction: String,
    numberStars: Number,
    numberRooms: Number,
    checkin_out: String,
    meetingRooms: String,
    wheelChairAccesible: Boolean,
    wifiSpeed: String,
    swimmingPool: String,
    restaurants: String
    textContent: [String],
    imageContentUrl: [String],  (key:images when post)
    coordinates: [String],
    introduction: [String],
    price: [{
     DUInr: Number,
     DUIprice: Number,
     DoubleRoomNr: Number,
     DoubleRoomPrice: Number,
     breakfast: Number,
     DailyTax: Number
    }]
  }
~~~
~~~  
  RESTAURANTS:
  
  restaurant{
    name: reqString,
    city: String,
    textContent:[String],
    imageContentUrl: [String],  (key:images when post)
    price: Number,
    coordinates: [String],
    introduction: [String]
  }
~~~   
~~~  
  EVENTS:
  
  event{
    name: reqString,
    city: String,
    titleSideBar: String,
    title: String,
    horario: String,
    textContent: [String],
    imageContentUrl: [String],  (key: images when post)
    price: Number,
    coordinates: [String],
    introduction: [String],
    transfer: [TransferSchema]
   }
~~~ 
~~~ 
   TRANSFER:
   trasnfer{
    city: String,
    company: String,
    transfer_in_out : Number,
    dispo_4h :  Number,
    hextra : Number,
    hextra_night: Number,
    dispo_5h_out : Number,
    dispo_4h_airport : Number,
    dispo_4h_night :  Number,
    transfer_in_out_night :  Number,
    dispo_6h_night : Number,
    vehicleType: String,
    vehicleCapacity: Number
   }
~~~  
Endpoints:

login:
~~~   
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
    
   transfer:
   
    *GET*
    /transfers               (get all transfers) 

    *POST*
    /transfers                (adds new transfers) type: form-data/json

    *DELETE*
    /transfers/:_id          (deletes the transfers by _id) 
