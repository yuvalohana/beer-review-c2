var beers = []
var ascending = 1;

var updateBeers = function() {
    $('.beers-list').empty();
    beers.forEach(function(beer) {
        $('.beers-list').append("<li>" + beer.name + " - " + beer.user + " - " + beer.rating + "</li>")
    })
}

var addBeer = function(beer, user, rating) {
    beers.push({ name: beer, user: user, rating: rating })
};

$(document).ready(function() {
    $('button').on('click', function(e) {
        var beer = $("input[name='beerName']").val();
        var user = $("input[name='user']").val();
        var rating = $("select[name='rating']").val();
        addBeer(beer, user, rating)
        updateBeers()
        $('.beer-form')[0].reset();
        return false;
    });

    $('#beerSort').on('click', function(e) {
        if (!beers.length) {
            alert("Nothing to sort!")
        } else {
            beers = beers.sort(function(a, b) {
                var nameA = a.name;
                var nameB = b.name;
                if (nameA < nameB) {
                    return -ascending;
                } else if (nameA > nameB) {
                    return ascending;
                } else return 0; // names must be equal
            })
            ascending = ascending * -1; //toggles the sort order
            updateBeers();

        }
    });
})
