// const
//     model = require('../models/SERVERPROD_vs_SERVERPRODHA.js');


// async function findAll(req, res) {
//     model.find()
//         .then(findResult => {
//             res.send(findResult);
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || "Error recuperando SERVERPROD_vs_SERVERPRODHA ."
//             });
//         });
// };

// exports.findAll = findAll

module.exports = function (name, collection){
    
    var module = {};
    var c = collection
    var n = name;
    //const model = require('../models/' + name + '.js')(name, collection);
    const model = require('../models/model.js')(name, collection);

    module.findAll = function (req, res) {
        console.log(n)
                 model.find()
                     .then(findResult => {
                         res.send(findResult);
                     }).catch(err => {
                         res.status(500).send({
                             message: err.message || "Error recuperando " + name 
                         });
                     });
            };

    return module;
}