$(function() {

    //Get Car button for form and event
    var $getCarForm = $('#getCarForm');
    $getCarForm.on('submit.getCar', function($e) {
        getCar();
        return false;
    });


    // Small function to clear the form
    function clearTheForm() {
        $('#carreg').val('');
    }

    function getServiceAmount(make) {
        $.ajax({
            method: "GET",
            url: "/getServiceAmount/" + make + '/' + model + '/' + cc
        }).done(function(response) {
            console.log('getServiceAmount result', response);
        }).fail(function(err) {
            console.log('getServiceAmount error', err);
        });
    }

    //this is created to pick out data in the input areas of the form
    function getCar() {
        debugger
        var $carreg = $('#carreg').val();

        //this is created to GET data to database
        $.ajax({
            method: "GET",
            url: "http://dvlasearch.appspot.com/DvlaSearch?apikey=DvlaSearchDemoAccount&licencePlate=" + $carreg,
        }).done(function(response) {
            console.log(response);
            debugger
            var make = response.make;
            getServiceAmount(make);
        }).fail(function(err) {
            console.log(err);
        });
    };



    // $.get("localhost:3333/getServiceAmount" function( data ) {




    // $( ".result" ).html( data );
    // alert( "Load was performed." );
    //     });

    //makes of cars
    // with mongoose query database where make = make
    //
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


    // getCars();

});
