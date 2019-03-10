var svnUltimate = require('node-svn-ultimate');
var utils = require('./utils')

const default_options = {
   username: "edfariasn", // same as --username
   password: "4rg3nt1n4", // same as --password
   params: ['--force'],
   quiet: true,

 };
 
async function exportTo(src, dst, options) {
   
   return new Promise((resolve, reject) => {
    console.log("Cleaning " + dst)
    utils.deletePathContent(dst).then(() => {
      console.log("Executing SVN export of " + src)
      svnUltimate.commands.export(
        src,
        dst,
        options,
        function (err, data) {
          if (!err)
            return resolve('Export succeeds at ' + dst)
          else
            return reject(err)
        })
    }).catch((err) => {
        throw err
    });
  })
}

exports.exportTo = exportTo;

