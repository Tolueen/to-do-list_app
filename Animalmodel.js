class Animal {
    constructor(name) {
        // Encapsulated private variable "name"
        let _name = name;

        // Public method to get the name
        this.getName = function () {
            return _name;
        };

        // Public method to set the name
        this.setName = function (newName) {
            _name = newName;
        };
    }

    displayname() {
        console.log(`${this.getName()} is the name of this animal`);
    }

    details() {
        throw new Error("This abstract method will be implemented in a derived class");
    }
}


//class of animals with backbone
class Withbackbone extends Animal {   //inheritance of the animal class
    constructor(name) {
        super(name);     // inheriting the properties and method of the animal class
        this.withbackbone = true;
    }

    details() {    //polymorphysm by overriding the method in the base class
        console.log(`${this.name} is a vertebrate with ${this.withbackbone} backbone`);
    }
}
//class of animals without backbone
class Withoutbackbone extends Animal {
    constructor(name) {
        super(name);
        this.withoutbackbone = false;
    }

    details() {
        console.log(`${this.name} is a invertebrate with ${this.withoutbackbone} backbone`);
    }
}

//class of cold blooded animals with backbone
class ColdBloodedWithBackbone extends Withbackbone {
    constructor(name) {
        super(name);
        this.temperature = "cold blooded";
    }
    coldtempBB() {
        console.log(`${this.name} is a ${this.temperature} animal with ${this.withbackbone} backbone`);
    }
}

//class of cold blooded animals without backbone
class ColdBloodedWithoutBackbone extends Withoutbackbone {
    constructor(name) {
        super(name);
        this.temperature = "cold blooded";
    }
    coldtempWB() {
        console.log(`${this.name} is a ${this.temperature} animal with ${this.withoutbackbone} backbone`);
    }
}

// class for warm blooded animals with backbone
class WarmBlooded extends Withbackbone {
    constructor(name) {
        super(name);
        this.temperature = "warm blooded";
    }
    warmtemp() {
        console.log(`${this.name} is a ${this.temperature} animal with ${this.withbackbone} backbone`);
    }
}

// Instances creation
const arthropodaWB = new Withoutbackbone("arthropoda");
const arthropodaWBcold = new ColdBloodedWithoutBackbone("arthropoda");
const reptileWithCBBackbone = new ColdBloodedWithBackbone("Reptile");
const reptileWithBackbone = new Withbackbone("Reptile");
const fishWithBackbone = new Withbackbone("fish");
const amphibiaWithBackbone = new Withbackbone("amphibia");
const avesWarmBloodedWithBackbone = new WarmBlooded("aves");
const avesWithBackbone = new Withbackbone("aves");
const mammalWarmBloodedWithBackbone = new WarmBlooded("mammal");
const mammalWithBackbone = new Withbackbone("mammal");


// Testing my instances
arthropodaWB.displayname();
arthropodaWB.details();
arthropodaWBcold.coldtempWB();
console.log("-------------------------------------");
reptileWithBackbone.displayname();
reptileWithBackbone.details();
reptileWithCBBackbone.coldtempBB();
console.log("-------------------------------------");
fishWithBackbone.displayname();
fishWithBackbone.details();
console.log("-------------------------------------");
amphibiaWithBackbone.displayname();
amphibiaWithBackbone.details();
console.log("-------------------------------------");
avesWarmBloodedWithBackbone.displayname();
avesWarmBloodedWithBackbone.details();
avesWarmBloodedWithBackbone.warmtemp();
console.log("-------------------------------------");
mammalWithBackbone.displayname();
mammalWithBackbone.details();
mammalWarmBloodedWithBackbone.warmtemp();