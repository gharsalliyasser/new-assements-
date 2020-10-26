//=============================================== 
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number, 
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
function percentOf(num1, num2) {
	return (num1*100)/num2 +" of num2 " 

}

//=============================================== 

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats" 
//pluralize('cat', 1)  ==>  "1 cat" 
// Note: please write one or two lines here describing your solution.
function pluralize(noun, number) {
	if (number === 1) {
		return number + " " + noun;
	}
    return number + " " + noun + "s";
}


//=============================================== 

/*
Write a function that uses console.log to give the following triangle:
#
## 
###
####
#####
######
#######
*/
// Note: please write one or two lines here describing your solution.
function drawTriangle() {
  var i = 0, j = 0;
  var result = "\n";
  do {
    j = 0;
    while(j<=i) {
    result = result + "#";
    j++;
    } 
    result = result + "\n"
    i++;
  }while(i<7);
  return result;
}

//=============================================== 

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0 
function countVowels(string) {
  if (string.length === 0) {
    return 0;
  }
  if (string.slice(0, 1).toUpperCase() === "A" || string.slice(0, 1).toUpperCase() === "E" 
    || string.slice(0, 1).toUpperCase() === "I" || string.slice(0, 1).toUpperCase() === "O" 
    || string.slice(0, 1).toUpperCase() === "U") {
    return increment(countVowels(string.slice(1)));
  }
  return countVowels(string.slice(1))
}

function increment(x) {
return x + 1;
}


