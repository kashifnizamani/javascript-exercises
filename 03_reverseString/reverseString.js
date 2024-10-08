const reverseString = function(string) {
 
    const myArray = string;
    let myString = '';
    for(let i = 1; i <= myArray.length; i++ ){
        myString += myArray[myArray.length - i];
    }
    return myString;

};

// Do not edit below this line
module.exports = reverseString;
