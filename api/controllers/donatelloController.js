exports.index = function(req, res) {

    const stats = "hello, I'm Donnie.";
    const picture = '/images/don.jpg';
    const donatello_object = { stats, picture };

    res.render('turtle', { title: 'Donatello', data: donatello_object });
    
};