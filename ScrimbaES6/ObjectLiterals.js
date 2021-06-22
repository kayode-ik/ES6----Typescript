
// function addressMaker(city, state) {

//     const newAddress = {
//         city,
//         state
//     }
//     console.log(newAddress);
// }

// addressMaker('Austin', 'Texas');

//Exercise

function addressMaker(address) {

    const {city, state} = address;

    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
    
}

addressMaker({city: 'Austin', state: 'Texas'});