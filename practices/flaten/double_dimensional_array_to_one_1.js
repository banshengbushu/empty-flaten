'use strict';

function double_to_one(collection) {
  var result = splitArr(collection);

  return result;
}

function splitArr(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i]);

  }

  return newArr;
}

module.exports = double_to_one;
