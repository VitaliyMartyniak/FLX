var data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];


function findTypes() {
  var array = [];
  for (var i = 0; i < arguments.length; i++) {
    array.push(typeof(arguments[i]));
  }
  return array;
}
findTypes(null, 5, 'hello'); 



function executeforEach(arr1, callback) {
  for (var i = 0; i < arr1.length; i++) {
    callback(arr1[i]);
  }
}
executeforEach([1,2,3], function(el) { 
  console.log(el) 
})



function mapArray(arr2, callback) {
  var newArr = [];
  for (var i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i] + 3);
  }
  return callback(newArr);
}
mapArray([2,5,8], function(el) { 
  console.log(el) 
})



function filterArray(arr3, callback) {
  var newArr3 = [];
  for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] > 3) {
    newArr3.push(arr3[i]);
    }
  }
  return callback(newArr3);
}
filterArray([2,5,8], function(el) { 
  console.log(el) 
})




function getAmountOfAdultPeople(info) {
  var j = 0;
  for (var i = 0; i < info.length; i++) {
    if (info[i]["age"] > 18) {
    j++;
    }
  }
  return j;
}
getAmountOfAdultPeople(data)




function getGreenAdultBananaLovers(info) {
  var newArr4 = [];
  for (var i = 0; i < info.length; i++) {
    if (info[i]["age"] > 18 && info[i]["favoriteFruit"] === "banana" && info[i]["eyeColor"] === "green") {
      newArr4.push(info[i]["name"]);
    }
  }
  return newArr4;
}
getGreenAdultBananaLovers(data)



function keys (object) {
var newObject = [];
for (var key in object) {
    newObject.push(key);
  }
  return newObject;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3})


function values (object2) {
  var newObject2 = [];
  for (var key in object2) {
      newObject2.push(object2[key]);
    }
    return newObject2;
  }
values({keyOne: 1, keyTwo: 2, keyThree: 3})



function showFormattedDate (date) {
  var formattedDay = date.getDate();
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var formattedMonth = monthNames[date.getMonth()];
  var formattedYear = date.getUTCFullYear();
  var formattedFullDate = 'Date: ' + formattedDay + ' of ' + formattedMonth + ', ' + formattedYear;
  return formattedFullDate
}
showFormattedDate(new Date('2019-01-27T01:10:00'))



function isEvenYear (date2) {
  var formattedYear = date2.getUTCFullYear();
  if (formattedYear % 2 === 0) {
    return true
  } else {
    return false
  }
}
isEvenYear(new Date('2019-01-27T01:10:00'))



function isEvenMonth (date3) {
  var formattedMonth = date3.getUTCMonth() + 1;
  if (formattedMonth % 2 === 0) {
    return true
  } else {
    return false
  }
}
isEvenMonth(new Date('2019-02-27T01:10:00'))