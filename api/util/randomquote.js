// Generates a random quote from an array
exports.sayRandomQuote = function(arr) {
    
    let num = Math.floor(Math.random() * arr.length);
    return arr[num];

}