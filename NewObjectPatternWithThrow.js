function Marsupial(name, nocturnal) {
    if(!(this instanceof Marsupial)) {
        throw new Error("Object must be created using new");
    }
    this.name = name;
    this.nocturnal = nocturnal;
}

var slider = Marsupial("Slider", true);
console.log(slider.name);