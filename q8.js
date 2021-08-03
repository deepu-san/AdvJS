const name = { firstName: 'Philip',
lastName: 'Fry' };

const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

var name2 = Object.assign(name) // copies the contents of object 'name' to 'name2'
var details2 = Object.assign(details) // copies the contents of object 'details' to 'details2'

var merge = Object.assign(name,details) // merges the contents of both the objects 'name' and 'details' 

var keys = Object.keys(merge)  // stores or collects the keys in the object 'merge' in the form of an array.
var values = Object.values(merge) // stores or collects the values in the object 'merge' in the form of an array.
var keyvaluepairs = Object.entries(merge) // stores or collects the key-value pairs in the object 'merge' in the form of an array.

console.log(merge); // prints the contents of the object ''merge'
console.log(keys); // prints the keys in the form of an array
console.log(values); // prints the values in the form of an array
console.log(keyvaluepairs); // prints the key-value pairs in the form of an array
