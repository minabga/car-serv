//main

$(function() {

    //Get Car button for form and event
    var $getCarButton = $('#getcarbutton');
    $getCarButton.on('click', function(event) {
        // This stops the page executing the request you set on the form, if we dont do this
        // the page will execute the request and the code wont get to our addNewCar function
        // and just return the word Created
        // event.preventDefault();
        // //evoke a function here to do the post request
        // // addNewCar();
        // getCars();
        addNewCar();
    });


    // Small function to clear the form
    function clearTheForm(){
        $('#carreg').val('');
    }

// should i be using a GET or POST to bring back information on car reg that I typed into the text box

    //Initial function thart runs to get cars
    // function getCars(){
    //     debugger;
    //   $.ajax({
    //       method: 'GET',
    //       //how do i take number plate entered into text box and pass into URL below
    //       url: 'https://dvlasearch.appspot.com/DvlaSearch?licencePlate=mt09nks&apikey=DvlaSearchDemoAccount'
    // //   }).done(function(cars) {
    // //       cars.forEach(function(car){
    // //           //Use our new function to add the current car to page. We pass in the car so we can use in the next function
    // //           addNewCarUsingHandlebars(car)
    // //       });
    //   }).fail(function(error) {
    //       console.log('Error', error);
    //   });
    // }


    //this is created to pick out data in the input areas of the form
    function addNewCar() {
        debugger
    	var $carreg = $('#carreg').val();
        // var $bhp = $('#bhp').val();
    	// var data = {
    	// 	name: $name,
        //     bhp: $bhp

      //this is created to post data to database
      $.post("http://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=MT09KLM", function(result){
          debugger
      })
    	// $.ajax({
     //  		method: "POST",
     //  		url: "http://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=MT09KLM",
    	// })
        // I changed the server code to send back the saved car as well the status 201 this way
        // we can take the details and just append the new car.
    //   	.done(function(car) {
    //       debugger// Clear the form values, seperated this out in new function
    //       clearTheForm()
    //       // Set up the saved car ready to append using Handlecars
    //       addNewCarUsingHandlebars(car)
    //   });
    }

    // getCars();

});
