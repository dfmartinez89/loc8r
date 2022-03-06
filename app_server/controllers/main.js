/* GET home page */

module.exports.index = (req, res) => {
    res.render('index', { title: 'Express' });
  };
  
  module.exports.test = (req, res) => {
    res.render('index', { title: 'Express Test' });
  };