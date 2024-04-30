// function fibanacci(n){
//     const fib = [0,1];
//     for(let i = 2; i < n;i++){
//         fib[i] = fib[i-1] + fib[i-2];
//     }
//     return fib;
// }

// console.log(fibanacci(2));
// console.log(fibanacci(4));
// console.log(fibanacci(7));

//___________________________________________
// 2...with recursion
// Fn = F(n-1) +  f(n-2)
function recursiveFibanacci(n){
 if(n < 2){
    return n;
 }
 return recursiveFibanacci(n-1)+  recursiveFibanacci(n-2);
}
console.log(recursiveFibanacci(0));
console.log(recursiveFibanacci(3));
console.log(recursiveFibanacci(7));