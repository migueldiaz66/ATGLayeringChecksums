module.exports = (app, name, collection) => {

    //const controller = require('../controllers/' + name + '.js')(name, collection);
    const controller = require('../controllers/controller.js')(name, collection);
    
    app.get('/'+name, controller.findAll);

}