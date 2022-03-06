/* GET home page */

module.exports.index = (req, res) => {
    res.render('index', { title: 'Express Main' });
  };
  
  module.exports.test = (req, res) => {
    res.render('index', { title: 'Express Test' });
  };