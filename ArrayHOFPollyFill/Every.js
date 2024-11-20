/*Behind the scene*/
function Every(arr, callBackFunction) {
    for (let i = 0; i < arr.length; i++) {
        if (!callBackFunction(arr[i])) {
            return false
        }
    }
    return true;
}
let arr = [0, 3, 4, 5, 6, 7]
const callBackFunction = (value) => value > 1;
console.log(Every(arr, callBackFunction))
/*Real Function*/
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
/*The .every() function in JavaScript works by iterating over each element of the array and applying 
a callback function (in your case, isBelowThreshold) to each element. It checks whether every element 
in the array meets the condition specified in the callback function. If all elements return true 
for the condition, .every() returns true; otherwise, it returns false once the first false is 
encountered.*/