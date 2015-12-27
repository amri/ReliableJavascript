var AnimalKingdom = AnimalKingdom || {};

AnimalKingdom.marsupial = function(name, nocturnal) {
    var instanceName = name,
        instanceIsNocturnal = nocturnal;

    return {
        getName: function() {
            return instanceName;
        },
        getIsNocturnal: function() {
            return instanceIsNocturnal;
        },
        isAwake: function(isNight) {
            return isNight === instanceIsNocturnal;
        }
    }
};

AnimalKingdom.kangaroo = function(name) {
    var baseMarsupial = AnimalKingdom.marsupial(name, false);

    baseMarsupial.hop = function() {
        return baseMarsupial.getName() + " just hopped";
    };

    return baseMarsupial;
};


var jester = AnimalKingdom.kangaroo("Jester");
console.log("Hop",jester.hop());
console.log("Awake",jester.isAwake(true));
console.log("Instance of Kangaroo",jester instanceof AnimalKingdom.kangaroo);
console.log("Instance of Marsupial",jester instanceof AnimalKingdom.marsupial);