/*
* async and await are reserved keywords used to managed asynchronous operations
*/


// * Lets supposed there is a process to verify if a user supplied valid information to authenticate itself.

function authenticate (credentials) {
    return new Promise ((resolve, reject) => {
        credentials || credentials !== ''
        ? setTimeout( () => resolve({message:"User properly authenticated", status:200}))
        : reject( new Error({message:"User unauthorized", status:401}));
    });
}

async function verifyAuthentication() {
    const authentication = await authenticate("");
    if(authentication.status === 401){
        throw new Error(authentication.message);
    }
    if(authentication.status === 200){
        console.log(authentication);
    }
}

verifyAuthentication();