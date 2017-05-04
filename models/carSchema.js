///adding schema without this i have no parameters to update my objects in my database
var mongoose = require('mongoose');
var carSchema = mongoose.Schema({
  fuelType: String,
  make: String,
  model: String,
  cylinderCapacity: String,



});



var CandySchema = mongoose.Schema({
	name: String,
	color: String
});

module.exports = mongoose.model('Candy', CandySchema);
