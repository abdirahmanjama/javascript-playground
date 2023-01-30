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
 * Slow
 */
