const b = true;
const n = 1;
const s = 'string';
const a = [1, 2];
const o = {key1: 'value1', key2: 'value2'};
const f = function() {
    console.log('run f()');
};

let x = 0;
x++;
x += 100;

const s1 = 'single quote (\') string with ' + n + ' in it';
const s2 = "double quote (\") string with " + n + " in it";
const s3 = `backtick (\`) string with ${n} in it using \${n}`;

///////////////

if (n >= 0) console.log(n + ' is greater than or equal to 0');

if (a[0] === n) {
    console.log(a[0] + ' exactly equals ' + n);
} else {
    console.log(a[0] + ' doesn\'t exactly equal ' + n);
}

const s4 = (a[1] === 2)
    ? a[1] + ' exactly equals 2'
    : a[1] + ' does not exactly equal 2';

///////////////

const list = ['A', 'B', 'C'];

for (let i = 0; i < list.length; i++) {
    console.log('item: ' + list[i]);
}

for (let i in list) {
    console.log('item: ' + list[i]);
}

for (let item of list) {
    console.log('item: ' + item);
}

///////////////

list.forEach(item => {
    console.log('item: ' + item);
});

const lowerCasedList = list.map(item => {
    return item.toLowerCase();
});

const listWithoutB = list.filter(item => {
    return item !== 'B';
});

const numList = [1, 3, 5, 2, 4];
const sortedNumList = numList.sort((a, b) => {
  return a - b; //lowest to highest
});

///////////////

function function1(p1, p2) {
    console.log(`run function1() with parameters: ${p1}, ${p2}`);
}
function1('a', 'b');

const function2 = (p1, p2) => {
    console.log(`run function2() with parameters: ${p1}, ${p2}`);
};
function2('a', 'b');

///////////////

class MyClass {
    constructor(name) {
        this.name = name;
        this.method1RunCount = 0;
    }

    method1(p1, p2) {
        this.method1RunCount++;
        console.log(`${this.name}: run method1() with parameters: ${p1}, ${p2}`);
    }

    method2() {
        console.log(`${this.name}: run method2() and the method1RunCount is ${this.method1RunCount}`);
    }
}

const myClass = new MyClass('FirstName');
myClass.method1('a', 'b');
myClass.method2();

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
    console.log('answerPromised resolved: ' + answer);
}, rejectedAnswer => {
    console.log('answerPromised rejected: ' + rejectedAnswer);
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
