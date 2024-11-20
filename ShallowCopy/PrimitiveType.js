/*In the primitive type 
In a shallow comparison, when two objects or arrays are compared, it only checks:

If each primitive property (like numbers, strings, booleans) has the same value.
If each non-primitive property (like objects or arrays) has the same reference in memory, 
rather than checking the actual contents of these nested objects or arrays.

*/

const obj1 = { name: "Alice", age: 25 };
const obj2 = { name: "Alice", age: 25 };

console.log(obj1.name === obj2.name); // true, because the strings are identical
console.log(obj1.age === obj2.age);   // true, because the numbers are identical
console.log(obj1 === obj2);           // false, because obj1 and obj2 are different objects in memory

/*In this example, obj1.name and obj2.name are compared directly because they are strings 
(primitives). Since "Alice" === "Alice", this part of the shallow comparison would evaluate to true.

However, the overall comparison obj1 === obj2 is false because obj1 and obj2 are different 
objects in memory.*/