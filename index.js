const Pierre = require("./information")

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Je m'appelle ${Pierre.name} et j'étudie en ${Pierre.campus}`,
    e : "oO",
    T : "U "
}));