function calculateTax(income, expenses) {
    if(income<0 || expenses<0 || expenses>income)
    {
        return "Invalid Input";
    }
    let difference = income-expenses;
    let tax =(difference * .20); 
    return tax;
   
}


function sendNotification(email) {
    if(!email.includes('@'))
    {
        return "Invalid Email";
    }
    let count=0;
    for(let i=0;i<email.length;i++)
    {
        if(email[i]==='@')
            {
                count++;
            }
    }
    if( count!==1 || email[0]==='@')
    {
        return "Invalid Email";
    }
    let subString = email.split('@');
    return subString[0]+' '+'sent you an email from'+' '+subString[1];
}

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

 function calculateFinalScore(obj) {

    if(typeof obj.name !=='string' || typeof obj.testScore !=='number'||typeof obj.schoolGrade !== 'number' || typeof obj.isFFamily !=='boolean' || typeof obj !=='object')
    {
        return "Invalid Input";
    }
    if(obj.testScore>50 || obj.schoolGrade>30)
    {
        return "Invalid Input";
    }
    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
        finalScore += 20;
    }
    return finalScore>=80;

}

function  waitingTime(waitingTimes  , serialNumber) {
    let total = 0;
    let avg;
    if(!Array.isArray(waitingTimes) || typeof serialNumber!=='number'|| serialNumber<waitingTimes.length )
    {
        return  "Invalid Input";
    }
    for(let i=0;i<waitingTimes.length;i++)
    {
       total=total+waitingTimes[i];
        avg= total/waitingTimes.length;
    }
    let total_personRemain =  serialNumber-1;
    let remainPerson=total_personRemain-waitingTimes.length;
    let needTime =Math.round(avg)*remainPerson;
    return needTime;
    
    
}








