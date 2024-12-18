const sumOfEvens=(n)=>{
    let sum=0
    for(i=1;i<=n;i++)
    {
        if(i%2==0){
            sum+=i
        }
        
    }
    document.write(`The sum of even numbers upto  ${n} is ${sum}`)
}
let num=prompt("Enter a number")  
sumOfEvens(num )