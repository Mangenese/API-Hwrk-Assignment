//create an app that displays 10 images on a page with a click of the button
// when user clicks on button
// display 10 images when button is clicked 
// user can then click on the button to animate the gif
// user can also click it again to stop the gif 
// allow the user to create a way to add a new button
// that new button will populate into the array for topics 

// array for the items to go into 
var pokemon = ["Pikachu", "Charizard", "Greninja", "Eevee", "Squirtle", "Piplup" ]

$(document).on("click", ".pokemon", function (){
    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + $(this).attr("data-name") + "&api_key=2GkeMiEVpWc9VEWUuwkVWAf36g5KM1ul&limit=10"
    
    $(".gif").empty();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
            
            var rating = response.data[i].rating;
            var imgDiv = $("<div>");
            var image = $("<img>");
            var p = $("<p>");
           
            imgDiv.addClass("img-div")
            p.addClass("rating");
            p.attr("src", rating);
            // setting a class with the tage to animate it
            image.attr("class", "animateGif")
            image.attr("src", response.data[i].images.original_still.url)
            image.attr("data-animate", response.data[i].images.original.url);
            image.attr("data-still", response.data[i].images.original_still.url);
            image.attr("data-state", "still");
            image.attr("data-state", "animate");
            //prepending the rating and buttons to the imgDiv
            imgDiv.prepend("Rating: " + rating);
            imgDiv.prepend(image);
            //prepending the imgDiv to the class of gif
            $(".gif").prepend(imgDiv);

        }

        
        $(document).on("click", ".animateGif", function () {
            var status = $(this).attr("data-state");
            if (status === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }
        
            else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }

        })

        

    });

})


//function for rendering buttons 
function renderButtons() {
    // to stop buttons from repeating 
    $("#buttons").empty();

    for (var i = 0; i <pokemon.length; i++) {
        // creating buttons for all the items in the arrays
        var button = $("<button>");
        button.addClass("pokemon");
        button.attr("data-name", pokemon[i]);
        button.text(pokemon[i]);
        $("#buttons").append(button)


    }
}
// on click function that grabs the users input and makes a button
$("#add-button").on("click", function(event) {
    event.preventDefault();
    var input = $("#button-input").val().trim();
    pokemon.push(input);
    renderButtons();
});
 
renderButtons();