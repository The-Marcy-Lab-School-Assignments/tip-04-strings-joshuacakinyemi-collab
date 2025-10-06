/*
Complete this function using a for loop

You should not use the reverse method and you should not use the reverse method or convert the input to an array.

The function should return a NEW string as the output. 
*/
function reverseString(str) {

    for (let i = str.length - 1; i > 0; i--) {
        console.log(str[i])
    }
}

// Test the function
console.log(reverseString("Hello")); // Output: "olleH"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
