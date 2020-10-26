<// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================
//Depending on data modeling concept that you have learned:
// create a factory function called makeComputer that represents computers,
// what different attributes computers may have? create two computers object from your factory function and save them in
// one array called computers!
// Note: please write one or two lines here describing your solution.
  function makeComputer(type, color, weight) {
    return {
  type : type ,
  color : color ,
  weight : weight 
  };
}
  // TODO: Your code here



// write function displayComputer that can be used to display one computer.

 var computer1 = makeComputer('asus' , 'red', 2.5) ;
 var computer2 = makeComputer('lenovo', 'black', 4)
var computers = [computer1 ,computer2]


function displayComputer(computer) {

  return computer.type + ' ' + computer.color + ' ' + computer.weight;
};


//=============================================================================
/*                                  Q2                                       */
//=============================================================================

//Write a function that takes an array of strings as a input,and returns an array
//of all of those strings, but transformed to upper case.
//You can use toUpperCase method to convert a string to upper case.
//solve it using the most appropriate helper functions(each,map,filter).
// Note: please write one or two lines here describing your solution.
// var strArr = ['hello', 'world', 'whirled', 'peas'];
// uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
function uppercaseAll(arrayOfStrings) {
 
  return map(arrayOfStrings, function(element) {
  	return element.toUpperCase();
  });

}



//=============================================================================
/*                                  Q3                                       */
//=============================================================================
//write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//solve it using one of the most appropriate helpers functions(each,map,filter).
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397
  },
  {
    country: "India",
    population: 1339180127
  },
  {
    country: "USA",
    population: 324459463
  },
  {
    country: "Indonesia",
    population: 263991379
  }
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {

  return filter (arrayOfObjects, function(element){
  return element.population > 500000000 ;
});
}


//=============================================================================
/*                              Q4                                           */
//=============================================================================

//Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
//Note: solve it using the most appropriate helpers functions(each,map,filter)
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: please write one or two lines here describing your solution.

function halveAll(numbers) {
  // your code is here
  return map(numbers, function(element){
  	return element/2 ;
  });

}

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
//solve it using one of the most appropriate helpers functions(each,map,filter).
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.
function values(obj) {
  return map(obj, function(element,key) {
  	return element;
  });



}

//Good Luck :))
