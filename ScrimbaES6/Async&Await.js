/*
const photos = [];

async function photoUpload() {

    let uploadStatus = new Promise ((resolve, reject) => {

        setTimeout(() => {
            let error = false;

            if (error){
                reject("Photo Upload Unsuccessful");
            }else{
                photos.push("Profile Pic");
                resolve("Photo Uploaded");    
            }
        },2000);
    })

    let result = await uploadStatus;
    console.log(photos.length);
    console.log(photos);
    return result;
    // console.log(result);
}

photoUpload()
.then((result) => (console.log(result)))
.catch((error) =>(console.log(error)));
*/
//EXAMPLE-----------
//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await
const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getrandomJokes(){

    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data);
      
}
getrandomJokes();