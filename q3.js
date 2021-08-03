// The output will be an Error Message!

// code given in question: 
var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(employee);
delete Emp1.company Console.log(emp1.company);

//Here ideally there won't be any output of the code. the compiler will show an Error message. This is because 'Object.create()' function does not copy the values of an object. It only copies the prototype (or structure) of an object. Even after that here we are deleting the key-value pair associated with the key 'company' in this case, hence we are trying to call an attribute that has been removed or does not exist.  (P.S : the difference is variable names were ignored, generally they will also cause error)
