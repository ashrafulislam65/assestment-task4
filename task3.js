function checkDigitsInName(name) {
    if(typeof name !=='string')
    {
        return "Invalid Input";
    }
     let number;
     for(let i=0;i<name.length;i++)
     {
        number = !isNaN(parseInt(name[i]))
     }
     return number;
    
   
}
let result = checkDigitsInName(123)
console.log(result);



