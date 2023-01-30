/**
 * Mental Models
 * 
 * A mental model is an explanation of someone's thought process about how something works in the real world. 
 * 
 * In this document, we will identify and look at snippets of code. 
 * The main idea is to ensure, we can reflect on our mental model. 
 * 
 * 
 */

function exampleOne() {
    let a = 10;
    let b = a;
    a = 0;

    return [a, b]
}

/**
 * How does exampleOne actually work? What is your mental Model
 * 
 * let a = 10; -> declare a variable called a and set it to the value 10. 
 * let b = a; -> declare a variable called b and set it to a. a is 10, therefore b is 10. 
 * a = 0; -> set a to 0. 
 * 
 * After following line by line, we can see that a = 10 and b = 0;
 */