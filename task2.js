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
let result=sendNotification('sadia@8icloud.com')
console.log(result)
