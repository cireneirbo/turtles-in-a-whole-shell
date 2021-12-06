// export 'turtle.jade' for '/donatello'
exports.index = function(req, res) {

    // Declare the page's content
    const stats = {

    };
    const picture = '/images/don.jpg';
    const introQuote = "";
    const description = "";
    const quotes = [

    ];
    const randomQuote = sayRandomQuote(quotes);

    // Create an object to pass as data
    const donatello_object = { stats, picture, introQuote, description, randomQuote };

    // Render page and pass data as variables
    res.render('turtle', { title: 'Donatello', data: donatello_object });
    
};

// Generates a random quote from an array
function sayRandomQuote(arr) {
    
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];

}