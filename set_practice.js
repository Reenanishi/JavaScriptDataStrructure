const set1 = new Set([9,8]);
const set2 = new Set([1, 2, 3]);

//const unionSet = new Set([...set1, ...set2]);


set1.add(4);
set1.add(5,);
set2.add(8);
set2.add(5,);
set2.delete(8);

console.log(set1);
console.log(set2);
console.log("Set 2 contains 3? --> "+ set2.has(3)); // checking for exsitence
console.log("Union : " + unionSet);


// _______________________________________________

const mySet = new Set();
mySet.add("apple");
mySet.add("mango");
mySet.add("baanana");

mySet.add("baanana"); //duplicate value
mySet.add("berry");
mySet.add("guava");
console.log(mySet);