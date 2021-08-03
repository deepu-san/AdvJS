//The given example is not the correct way to do it. The correct way is as follows:

function Hero(name, level)
{
 this.name = name ;
 this.level = level ;
}

// Here we have to use 'this' function to differentiate between the variables, that is, we are copying the name and level which are passed to the function 'Hero' to a global variable 'name' and 'level'.
