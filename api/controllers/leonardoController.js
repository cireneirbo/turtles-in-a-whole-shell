exports.index = function(req, res) {

    const stats = "hello, I'm Leo.";
    const picture = '/images/leo.jpg';
    const leonardo_object = { stats, picture };

    res.render('turtle', { title: 'Leonardo', data: leonardo_object });
    
};