/**
 * Mental Models
 * 
 * A mental model is an explanation of someone's thought process about how something works in the real world. 
 * 
 * In this document, we will identify and look at snippets of code. 
 * The main idea is to ensure, we can reflect on our mental model. 
 * 
 * In this file, we will create and look at two different functions. Let's try to see if we actually understand what's happening. 
 * 
 */

function exampleOne() {
    let a = 10;
    let b = a;
    a = 0;

    return [a, b]
}

/**
 * 
 * How does exampleOne actually work? What is your mental Model
 * 
 * let a = 10; -> declare a variable called a and set it to the value 10. 
 * let b = a; -> declare a variable called b and set it to a. a is 10, therefore b is 10. 
 * a = 0; -> set a to 0. 
 * 
 * After following line by line, we can see that a = 10 and b = 0;
 *
 */


/**
 * Thinking fast and slow
 * 
 * When coding/thinking we usually two thinking models. 
 * 
 * Thinking fast revolves around using human instict, pattern matching and gut reactions. 
 * Whereas thinking slow often revolves around reading things step by step in a methodical manner - this helps with breaking complex things down.
 * 
 */

function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
        throw new Error('Please save your file before duplicating it')
    }

    let copy = {
        created: Date.now(),
        author: original.author,
        cells: original.cells,
        metadata: original.metadata
    }

    copy.metadata.title = 'Copy of ' + original.metadata.title
    return copy;
}

/**
 * After reading the function above, we may notice that:
 * 1. it duplicates a spreadsheet
 * 2. throws an error if original hasn't been saved
 * 3. returns a copy
 * 
 * But if you look carefully, you'll notice that this function actually modfiies the original object. 
 * 
 * 
 */

/**
 * Data types in JavaScript: 
 * 
 * In JavaScript we have two sets of data types: 
 * - Primitive values
 * - Objects
 * 
 * A primitive value has the following properties: 
 * 1. They aren't objects
 * 2. They do not have methods
 * 3. They are immutable
 * 
 * The function getPrimitiveValue shows a list of primitive values in JS. 
 * 
 * Objects in JavaScript however, are a collection of key value pairs, we can define objects in javascript by using a simple object initlisation / literal syntax. 
 * Objects in JS are conceptually similar to hash maps in Java, dictionaries in Python. It allows us to obtain values in constant O(1) time.
 * 
 * We've defined an example object below. 
 * 
 * The reason duplicate spreadsheet function from before edited the original spreadsheet is because objects in javascript are mutable. 
 */

function getPrimitiveValue() {
    const data = [1, "hi", true, null, undefined, Symbol("foo"), BigInt(91291281298192812)];
    return data[Math.floor(Math.random() * data.length)]
}

const obj = {
    prop1: 'lol',
    prop2: 'haha'
}