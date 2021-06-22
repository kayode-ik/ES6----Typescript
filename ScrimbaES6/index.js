import {Animal , Cat , Player , TennisPlayer} from './AnimalClass'

let cat = new Animal ();
let cat = new Cat ('Cat', 4);

let player = new Player ('Messi', 'Argentina');


player.playerHome();
cat.makeNoise();
console.log(cat.metaData);