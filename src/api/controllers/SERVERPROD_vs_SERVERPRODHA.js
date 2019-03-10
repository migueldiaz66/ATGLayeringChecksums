const
    controller = require('../models/SERVERPROD_vs_SERVERPRODHA.js');


async function findAll(req, res) {
    controller.find()
        .then(rootmondrp => {
            res.send(rootmondrp);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error recuperando SERVERPROD_vs_SERVERPRODHA ."
            });
        });
};

exports.findAll = findAll