/*Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
*/ 

function delayCallback(callback) {
    setTimeout(callback, 2000);
}

delayCallback(() => {
    console.log('This message is delayed by 2 seconds');
});

