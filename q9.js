const gimli =
{ name: "Gimli",
race: "dwarf",
weapon: "axe",
greet: function() { return `Hi, my name is ${this.name}!`; }, };

console.log(gimli.greet()); // prints the function 'greet()' in the object 'gimli' 
                            // To access the greet function you just have to  type "gimili.greet()". 
