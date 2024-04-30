function printNumber(number){
    if (number <= 10){
        
        
        console.log(number); // pre 
        printNumber(number+1);
        console.log(number);// post
    }
   }
    printNumber(1);
   
