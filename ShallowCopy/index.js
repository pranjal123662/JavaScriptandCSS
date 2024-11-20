let obj1={name:"Pranjal",details:{"age":"25"}}
let obj2={name:"Pranjal",details:{"age":"25"}}

console.log(obj1.details==obj2.details);

/*For Example, Here we have change the value name but when we are comparing both it logs true.*/

let obj3=obj1;
obj1.name="jaunpur"
console.log(obj1==obj3);




/*Shallow Comparison
A shallow comparison checks the top-level properties of two objects or arrays to see if they are 
the same reference or have the same values at the first level.

How It Works: For two objects or arrays, a shallow comparison checks if each immediate property 
(or element) is identical (for primitive types) or has the same reference (for objects and arrays).
Reference Comparison for Non-Primitive Types: If a property is a nested object or array, shallow 
comparison only checks if the reference of that property is the same, not the values within it.
In a shallow comparison, when two objects or arrays are compared, it only checks:

If each primitive property (like numbers, strings, booleans) has the same value.
If each non-primitive property (like objects or arrays) has the same reference in memory, 
rather than checking the actual contents of these nested objects or arrays.*/