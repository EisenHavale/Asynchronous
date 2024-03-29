/*
 *Promises
 * This is a way to manage information that might not be available right away. There are 2 type of methods to manage the info
 ? Resolve: Means everything went well and can use the info
 ? Reject: Means there was a problem and it rejects the process
 */


// * This example will work as a authorizer to verify age. If user is oder than 17 years old can continue otherwise will be rejected
const age = 15;
 const isOlder = new Promise( (resolve, reject) => {
    if(age > 17){
        resolve({message:'User is old enough to continue', age, error:null});
    }
    reject({message:'User is not old enough to continue', age, error:`Access denied for users younger than 18`});
 });



 isOlder.then(console.log).catch(console.log).finally(console.log("Process has finished"));
