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
let result = waitingTime([7, 8, 3, 4, 5], 3);
console.log(result)
