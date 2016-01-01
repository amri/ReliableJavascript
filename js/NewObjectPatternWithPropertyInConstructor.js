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

var slider = Marsupial("Slider", true);
var maverick = Marsupial("Maverick", false);
console.log(slider.name,slider.isAwake(true));

console.log(slider.isAwake === maverick.isAwake);