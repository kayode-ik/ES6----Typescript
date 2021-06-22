
// export class Animal {
//     constructor (type, legs) {
//         this.type = type;
//         this.legs = legs;
//     }

//     makeNoise(sound = 'Loud Noise') {
//         console.log(sound);
//     }

//     get metaData() {
//         return `Type: ${this.type}, Legs: ${this.legs}}`;
//     }

//     static return10 (){
//         return 10;
//     }
// }

// export class Cat extends Animal {
//     makeNoise(sound = " meow") {
//         console.log(sound);
//     }
// }

 class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    playerHome(name = 'Kayode', country = 'Nigeria'){

        console.log(`${this.name} was born in ${this.country}`);

    }

}
    const messi = new Player("Messi", "Argentina");

    messi.playerHome();



//  class TennisPlayer extends Player (){
//     constructor(name,country,age) {
//         super(name,country);
//         this.age = age;
//     }
    
//     playTennis() {
//         console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
//     }
// }

// const roger = new TennisPlayer( "Roger Federer", "Spain", 38);
// roger.playTennis();
