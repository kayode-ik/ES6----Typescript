/*
const buyFlightTicket = () => {

    return new Promise( (resolve , reject)=>{

        setTimeout(() => {
            const error = false;

            if(error){
                reject("Sorry your Payment was not successful")
            }else {
                resolve("Thank you, Payment Successful");
            }
        }, 3000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success))
.catch((error) => console.log(error));
*/
//EXAMPLE------------
/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
*/
const userData =() => {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            const error = false;

            if(error){
                reject('500 Level Error');
            }else {
                resolve({
                    firstName: ' Kayode',
                    age: 23,
                    email: 'ipentankayode5@gmail.com'
                });

            }

        }, 2000);
    });
}

userData()
.then((data) => console.log(data))
.catch((error) => console.log(error));