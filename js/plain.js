



/**
 * Three ways of looping through every item in an array.
 */
function forLoopsExample() {
    const list = ['A', 'B', 'C'];

    for (let i = 0; i < list.length; i++) {
        console.log('item: ' + list[i]);
    }
    
    //also works if list is an object
    for (let i in list) {
        console.log('item: ' + list[i]);
    }
    
    //also works if list is an object
    for (let item of list) {
        console.log('item: ' + item);
    }
}

/**
 * Some of the most common array comprehensions.
 */
function arrayComprehensionsExample() {
    const list = [1, 3, 5, 2, 4];

    //loop over each item in list
    list.forEach(item => {
        console.log('item: ' + item);
    });
    
    //set tenTimesList to a new copy of list but with each item multiplied by 10
    const tenTimesList = list.map(item => {
        return item * 10;
    });
    
    //set lessThan4List to a new copy of list but with items that are not less than 4 filtered out
    const lessThan4List = list.filter(item => {
        return item < 4;
    });
    
    //reorder items in list from lowest to highest
    list.sort((a, b) => {
      return a - b; //lowest to highest
    });
}

/**
 * Some ways of defining and running functions.
 */
function functionVariantsExample() {
    //all functions can accept any number of parameters and can return a value

    //define an anonymous function (and run it immediately)
    (function() {
        console.log('run anonymous function 0');
    })();

    //define an anonymous function (and store it in f1)
    const f1 = function() {
        console.log('run anonymous function 1');
    }
    f1(); //run f1()

    //define a function named f2 that accepts two parameters and returns their sum
    function f2(p1, p2) {
        console.log(`run f2() with parameters: ${p1}, ${p2}`);
        return p1 + p2;
    }
    const r2 = f2(10, 20); //run f2() passing in 10 and 20 and store the returned value in r2

    //define an arrow function that accepts two parameters and returns their sum (and store it in f3)
    const f3 = (p1, p2) => {
        console.log(`run f3() with parameters: ${p1}, ${p2}`);
        return p1 + p2;
    };
    const r3 = f3(10, 20); //run f3() passing in 10 and 20 and store the returned value in r3

    //define an arrow function without curly brackets that accepts two parameters and returns their sum (and store it in f4)
    const f4 = (p1, p2) => p1 + p2;
    const r4 = f4(10, 20); //run f4() passing in 10 and 20 and store the returned value in r4
}

/**
 * How to define a class, create instances of the class, and run methods on those instances.
 */
function classExample() {
    //define MyClass
    class MyClass {
        //constructor runs when a new instance is created
        constructor(name) {
            this.name = name;
            this.method1RunCount = 0;
        }
    
        //methods are basically just functions except that within them "this" refers to the instance of the class the method was run on.
        method1(p1, p2) {
            this.method1RunCount++;
            console.log(`${this.name}: run method1() with parameters: ${p1}, ${p2}`);
        }
    
        method2() {
            console.log(`${this.name}: run method2() and the method1RunCount is ${this.method1RunCount}`);
        }
    }

    //create instant of MyClass and run each method
    const myClassA = new MyClass('Alpha');
    myClassA.method1('a', 'b');
    myClassA.method2();

    //create another instant of MyClass and run method2()
    const myClassB = new MyClass('Beta');
    myClassB.method2(); //run method2 on myClassB instance of MyClass

    myClassA.method2(); //run method2 on myClassA to demonstrate that each instance has it's own set of local variables (name and method1RunCount in this case)
}



//TODO: document the examples below like the examples above



///////////////

setTimeout(() => {
    console.log('finished waiting for 2 seconds');
}, 2000);

const intervalId = setInterval(() => {
    console.log('another 2 seconds have passed');
}, 2000);
//clearInterval(intervalId);

///////////////

alert('I say!');
const booleanAnswer = confirm('Yes or no?');
const stringAnswer = prompt('What say you?');

///////////////

const answerPromise = new Promise((resolve, reject) => {
    const answer = prompt('Resolve promise? Enter "yes" or "no".');
    if (answer === 'yes') resolve('The user said yes.');
    else if (answer === 'no') resolve('The user said no.');
    else reject('The user provided an invalid answer.');
});

answerPromise.then(answer => {
    console.log('answerPromise resolved: ' + answer);
}, rejectedAnswer => {
    console.log('answerPromise rejected: ' + rejectedAnswer);
}).finally(() => {
    console.log('after answerPromise resolve/reject finished');
});

//

const goPromise = new Promise(resolve => resolve())
    .then(() => alert('Ready'))
    .then(() => alert('Set'))
    .then(() => alert('Go'));

goPromise.then(() => console.log('Going'));

///////////////

debugger;
