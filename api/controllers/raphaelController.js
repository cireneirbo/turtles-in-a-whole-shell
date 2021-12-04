// Import libraries
const { body,validationResult } = require('express-validator');
const async = require('async');

exports.index = function(req, res) {

    const raphael_stats = "hello, I'm Raph.";
    const raphael_picture = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.drawingtutorials101.com%2Fdrawing-tutorials%2FCartoon-Characters%2FTeenage-Mutant-Ninja-Turtles%2Fraphael%2Fhow-to-draw-raphael-from-teenage-mutant-ninja-turtles.jpg&f=1&nofb=1";
    const raphael_object = { raphael_stats, raphael_picture };

    res.render('raphael', { title: 'Raphael', data: raphael_object });
    
};