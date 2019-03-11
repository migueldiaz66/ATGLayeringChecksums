

// var MongoClient = require('mongodb').MongoClient;

// console.log(finalConfig)

// var urlMongoDb = "mongodb://127.0.0.1:27017/Liv_Ominchannel_DRP_Health_Monitor";

// async function insert_into_ecommerce_v11_3_env_configuration(data) {
//   return new Promise((resolve, reject) => {
//       MongoClient.connect(urlMongoDb, {
//             useNewUrlParser: true
//           }, function (e, db) {
//         if (e) {
//           reject(e)
//         };
//         var dbo = db.db();
//         dbo.collection("ecommerce_v11_3_env_configuration").drop(function () {
//           dbo.collection("ecommerce_v11_3_env_configuration").insertMany(data, function (e, r) {
//             if (e) reject(e);
//             db.close();
//             resolve(r.result)
//           })
//         });
//       })
//     }
// )}

// async function insertWithDropCreate(collection,data) {
//   return new Promise((resolve, reject) => {
//     MongoClient.connect(urlMongoDb, {
//           useNewUrlParser: true
//         }, function (e, db) {
//       if (e) {
//         reject(e)
//       };
//       var dbo = db.db();
//       dbo.collection(collection).drop(function () {
//         dbo.collection(collection).insertMany(data, function (e, r) {
//           if (e) reject(e);
//           db.close();
//           resolve(r)
//         })
//       });
//     })
//   })
// }

// exports.insert_into_ecommerce_v11_3_env_configuration = insert_into_ecommerce_v11_3_env_configuration;
// exports.insertWithDropCreate = insertWithDropCreate


var MongoClient = require('mongodb').MongoClient;

module.exports = function (config){

  var module = {};

  module.insertWithDropCreate = async function (collection, data) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(config.url, {
            useNewUrlParser: true
          }, function (e, db) {
        if (e) {
          reject(e)
        };
        var dbo = db.db();
        dbo.collection(collection).drop(function () {
          dbo.collection(collection).insertMany(data, function (e, r) {
            if (e) reject(e);
            db.close();
            resolve(r)
          })
        });
      })
    })
  }


  return module;
}
