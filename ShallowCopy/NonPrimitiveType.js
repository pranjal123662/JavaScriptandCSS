/*Non-Primitive Types (Objects and Arrays): References are compared, not contents.

When properties are objects or arrays, shallow comparison only checks if they are the same 
reference in memory, not if they contain identical data.*/

const details1 = { location: "New York" };
const details2 = { location: "New York" };

const obj1 = { name: "Alice", details: details1 };
const obj2 = { name: "Alice", details: details2 };

console.log(obj1.details === obj2.details); // false, different references

/*
Here, obj1.details and obj2.details have identical content, but since they are separate 
objects with different references, obj1.details === obj2.details returns false.

Shallow comparison only checks that details1 and details2 have different references in memory, 
not their contents.
*/

