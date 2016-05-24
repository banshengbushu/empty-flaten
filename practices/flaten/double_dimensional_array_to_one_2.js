'use strict';

function double_to_one(collection) {
  var result = [];

  collection.forEach(function (element) {
    for (var i = 0; i < element.length; i++) {
      var isExist = isExit(element[i], result);

      if (isExist) {
        result.push(element[i]);
      }
    }
  });

  return result;
}

function isExit(element, newArray) {

  for(var i = 0 ; i < newArray.length ; i++){
    if(element === newArray[i]){

      return false;
    }
  }

  return true;
}

module.exports = double_to_one;
