exports.index = function(req, res) {

    const stats = "hello, I'm Raph.";
    const picture = '/images/raph.jpg';
    const raphael_object = { stats, picture };

    res.render('turtle', { title: 'Raphael', data: raphael_object });
    
};