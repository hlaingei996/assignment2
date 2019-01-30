
    /*
      *
    * Use string methods split(), slice(), toLowerCase() and toUpperCase() 
    * and array methods join()
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    */

    const name = "AlbERt eINstEiN";

    function nameFormatter(oldName) {      
      /* 
        Split the string by space
        Slice the first character and make it uppercase
        Slice the reset of the characters and make it lowercase
        Join the splitted array with space to get the final result
        Final result should be "Albert Einstein"                
        */

        /*For First Name*/
        const newName = oldName.split(" ");
        const firstString = newName[0].slice(0,1);
        const resetString = newName[0].slice(1,6);
        const initial = firstString[0].charAt(0).toUpperCase();
        
        var firstArr = [];
        for (var i = 0; i < resetString.length; i++) {
            firstArr.push(resetString[i].toLowerCase());  
        }
        firstArr.unshift(initial);
        const firstName = firstArr.join('');

        /*For Last Name*/
        const secondString = newName[1].slice(0,1);
        const remainString = newName[1].slice(1,8);
        const initialforlast = secondString[0].charAt(0).toUpperCase();

        var secondArr = [];
        for (var i = 0; i < remainString.length; i++) {
            secondArr.push(remainString[i].toLowerCase());  
        }
        secondArr.unshift(initialforlast);
        const secondName = secondArr.join('');

        const name = firstName + ' ' + secondName;
        return name;
        
    }
    console.log(nameFormatter(name));
