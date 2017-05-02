var express = require('express'); //set up express package to pull out tools to use for file server what we see //https://expressjs.com/en/api.html
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public')); // middleware functipns

// parse application/x-www-form-urlencoded  //bodyparser ensure we have access to data
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json()); //

var mongoose = require('mongoose'); // DB control program
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/csd1');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //'error' triggers like events in dom to wait for clik but this event to act on and tells server!!! to open!! and connect to db
db.once('open', function() {
    // we're connected!
    console.log('DATABASE CONNECTED!!');
});




///adding schema without this i have no parameters to update my objects in my database
var Schema = mongoose.Schema;
var carsdSchema = new Schema({ //these a properties from the object coming back from dvla api
    fuelType: String,
    make: String,
    model: String,
    cylinderCapacity: String,
    price: Number
});
//adding new car captial C means this is the begining of object constructor
var Carsd = mongoose.model('Carsd', carsdSchema);

// ROUTES
//need this post request to add stuff to database
app.post('/addCar', function(req, res) { //middleware functions shorten request, response, next

    //creates records in the db
    var car = req.body;
    var newCar = new Carsd(car);
    newCar.save(function(err, resp) {
        if (err) {
            return res.sendStatus(500);
        }
        res.status(201).json(resp);
    });
});

app.get('/getServiceAmount/:make/:model/:cylinderCapacity', function(req, res) {
  // var make = req.params.make;
  // var model =
  const { make, model,  cylinderCapacity} = req.params;
  Carsd.find({
      make: make,
      model: model,
      cylinderCapacity: cylinderCapacity
  }).exec(function(err, cars) { //because this is a search query must put err req is for get feature
      if (err) {
          return res.status(500).send(err);
      }
      return res.json(cars);
  });
});



// console.log('GET REQUEST');
//THIS IS THE SEARCH QUERY I CREATE Car captial C for constructor  - cars next to req means requesting the files in cars
// Carsd.find({make:make }).exec(function(err, csd1){   //because this is a search query must put err req is for get feature
//
//
//   if (err) {
//     return res.status(500).send(err);
//   }
//   return res.status(200).send(price, make);
// // })


//
// var cars = [{
//   make: "HONDA",  //MT09TLN
//   cylinderCapacity: "1339 cc",
//   price: 130
//   }, {
//   make: "VOLKSWAGEN",  //MT09NKS
//   cylinderCapacity: "1968 cc",
//   price: 170
// }];



//need a get request here to send back info to client side


//////////////////////////
// app.post('/cars', function(req, res) {
//     console.log('POST REQUEST');
//     //console.log(req,body); this was confusing the code in the function above dont' ever use console again the body this made my whole database crash
//     var carData = req.body; //created new place variable to send data too
//     var newCar = new Car(carData); //reference for adding new cars and lines of data into my nosql database
//     newCar.save(function(err, model) { //allows me to add cars to the database
//         if (err) {
//             return res.status(500).send(err);
//         }
//         console.log(newCar)
//         // Sending the new car back
//         return res.status(201).send(newCar);
//     });

    //return res.json(req,body);

    //  return.res('POST');  //npm i -g nodemon watches js and everytime theres a change it reloads the server for you
// });

// app.put('/cars', function(req, res){
//   return res('PUT');  //STEP 3 test out on postman 1st get all rest routes (CRUD)
// });
//
// app.delete('/cars', function(req, res){
//   var carToBeRemovedId = req.body.id; //im going to send a car id into the body
//
//   Car.remove({ _id: carToBeRemovedId }, function(err, model){
//     if (err) {
//       return res.status(500).send(err);
//     }
//     return res.sendStatus(204);
//   })
//   return res('DELETE');
// });



app.listen(3333, function() { //port to listen to is 3333 and function to do
    console.log('App listening');
});
