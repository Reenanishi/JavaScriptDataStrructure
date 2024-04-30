function factorial(number,factorialNumber){
    if (number === 1){
         console.log(factorialNumber);
    }else{
        factorial(number-1, factorialNumber * number);
    }
}
 factorial(6,1);




  