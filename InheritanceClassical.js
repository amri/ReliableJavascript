function Marsupial(name, isNocturnal) {
    if(!(this instanceof Marsupial)) {
        return new Marsupial(name, isNocturnal);
    }
    this.name = name;
    this.isNocturnal = isNocturnal;

}

Marsupial.prototype.isAwake = function(isNight) {
    return isNight === this.isNocturnal;
};

function Kangaroo(name) {
    if(!(this instanceof Kangaroo)) {
        return new Marsupial(name, isNocturnal);
    }
    this.name = name;
    this.isNocturnal = false;
}

Kangaroo.prototype = new Marsupial();
Kangaroo.prototype.hop = function() {
    return this.name + " just hopped";
};

var jester = new Kangaroo("Jester");
console.log("Hop",jester.hop());
console.log("Awake",jester.isAwake(true));
console.log("Instance of Kangaroo",jester instanceof Kangaroo);
console.log("Instance of Marsupial",jester instanceof Marsupial);