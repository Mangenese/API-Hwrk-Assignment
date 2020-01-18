//create an app that displays 10 images on a page with a click of the button
// when user clicks on button
// display 10 images when button is clicked 
// user can then click on the button to animate the gif
// user can also click it again to stop the gif 
// allow the user to create a way to add a new button
// that new button will populate into the array for topics 

// array for the items to go into 
var pokemon = ["Pikachu", "Charizard", "Greninja", "Eevee", "Squirtle", "Piplup" ]

//function for displaying the gifs for the page 

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

renderButtons();