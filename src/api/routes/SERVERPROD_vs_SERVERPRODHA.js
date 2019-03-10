module.exports = (app) => {


    /***
     * ---------------------------------------------------
     * SERVERPROD_vs_SERVERPRODHA routes
     * ---------------------------------------------------
     *  */
    {
        const controller = require('../controllers/SERVERPROD_vs_SERVERPRODHA.js');
        // get all 
        app.get('/SERVERPROD_vs_SERVERPRODHA', controller.findAll);
        
    }


}