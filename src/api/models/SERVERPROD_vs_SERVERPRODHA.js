var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SERVERPROD_vs_SERVERPRODHA = new Schema({
    _id: {
        type: [Schema.Types.ObjectId]
    },
    error: {
        type: 'Mixed'
    }
});

module.exports = mongoose.model('SERVERPROD_vs_SERVERPRODHA', SERVERPROD_vs_SERVERPRODHA, 'SHA1_Diff_SERVERPROD_vs_SERVERPRODHA');