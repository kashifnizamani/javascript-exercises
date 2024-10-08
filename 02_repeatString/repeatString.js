const repeatString = function(string, num) {
    if(num < 0)
        return 'ERROR';
    
    let String  = '';
    for(let i = 0; i < num; i++){
        
        String += string;
    }
  

    return String;

};

// Do not edit below this line
module.exports = repeatString;
