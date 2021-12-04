exports.index = function(req, res) {

    const stats = "hello, I'm Mikey.";
    const picture = '/images/mikey.jpg';
    const michaelangelo_object = { stats, picture };

    res.render('turtle', { title: 'Michaelangelo', data: michaelangelo_object });
    
};