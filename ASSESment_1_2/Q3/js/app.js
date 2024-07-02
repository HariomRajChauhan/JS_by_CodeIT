/*Write a JavaScript function that takes a number as a parameter and throws a custom 
'Error' if the number is not an integer. */

function checkInteger(num) {
    if (!Number.isInteger(num)) {
        throw new Error('The number is not an integer');
    }
    return num;
}

try {
    console.log(checkInteger(5));
    console.log(checkInteger(5.5));
} catch (error) {
    console.error(error.message);
}


