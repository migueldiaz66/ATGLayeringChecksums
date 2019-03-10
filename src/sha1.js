const fs = require('fs'),
  path = require('path'),
  checksum = require('checksum');

async function readDirRecursive(startDir) {
  const readDirQueue = [],
    fileList = [];

  function readDir(dir) {
    function getItemList(readDir) {
      return new Promise((resolve, reject) => {
        fs.readdir(readDir, (err, itemList) => {
          if (err) {
            return reject(err);
          }
          resolve(itemList.map((item) => path.resolve(readDir, item)));
        });
      });
    }

    function getItemListStat(itemList) {
      function getStat(itemPath) {
        return new Promise((resolve, reject) => {
          fs.stat(itemPath, (err, stat) => {
            if (err) {
              return reject(err);
            }
            resolve({
              itemPath,
              isDirectory: stat.isDirectory()
            });
          });
        });
      }
      return Promise.all(itemList.map(getStat));
    }

    function processItemList(itemList) {
      for (const {
          itemPath,
          isDirectory
        } of itemList) {

        if (isDirectory) {
          readDirQueue.push(itemPath);
          continue;
        }
        checksum.file(itemPath, function (err, sum) {
            fileList.push({
              "pathSVN": itemPath.replace(startDir, '.'),
              "sha1SVN": sum
            });
        })
        
      }
      if (readDirQueue.length > 0) {
        return readDir(readDirQueue.shift());
      }
      return fileList;
    }
    return getItemList(dir)
      .then(getItemListStat)
      .then(processItemList);
  }
   return readDir(startDir);
}

exports.create = readDirRecursive;
