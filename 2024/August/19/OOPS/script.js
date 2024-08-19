// let animal = {
//     eats: true
// }

// let rabbit = {
//     jump: true
// }

// rabbit.__proto__ = animal
// console.log(rabbit);

class Animal {
    constructor(name) {
        this.name=name
        console.log("Object is Created");

    }

    eats() {
        console.log("Kha raha hooo");

    }

    jumps() {
        console.log("kood raha hoo");

    }
}

class Lion extends Animal {
    constructor(name,species) {
        super(name)
        this.sp=species
        console.log("Lion object is created");
        
    }
}

let a=new Animal("Nobita")
let l= new Lion("Seera","SnowKing")
console.log(a);
console.log(l);

// Getter and Setter concept is omitted as that is 90% not required for web-dev but required for managing code when you are writing a library or module using js.