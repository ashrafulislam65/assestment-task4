function calculateTax(income, expenses) {
    if(income<0 || expenses<0 || expenses>income)
    {
        return "Invalid Input";
    }
    let difference = income-expenses;
    let tax =(difference * .20); 
    return tax;
   
}
let result=calculateTax(10000, 3000



);
console.log(result);
