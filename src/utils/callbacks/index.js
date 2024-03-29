/**
 * * Callbacks
 * * Are any method sent as a parameter of a function where the function
 * * will decide when its a good time to call the execution of the callback.
 * * That way the callback is actually a function treated as a variable
 * ! First class citizen
 */

// ! Greeting

function greeting(name) {
    console.log("Hello " + name);
}


setTimeout(greeting, 2000, "Eisen");

