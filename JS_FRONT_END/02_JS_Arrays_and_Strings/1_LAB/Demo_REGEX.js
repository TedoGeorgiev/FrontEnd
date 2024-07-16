//REGEX
const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores aut blanditiis consectetur, deleniti ea et iste neque officiis optio quaerat quasi quo repellat repellendus repudiandae tempora tempore vel, voluptas!';

// REGEX Literal
const pattern = /[A-Z][a-z]+/g;

// REGEX class
const pattern2 = new RegExp('[A-Z][a-z]+', 'g');


// ----------------------- //


// -- REGEX METHODS -- //

// TEST
const result = pattern.test(text);
console.log(result);

// EXEC
const regExecArray = pattern.exec(text);
console.log(regExecArray);



// -- STRING METHODS -- //

// MATCH
const matchResult = text.match(pattern);
console.log(matchResult); // If has 'g' (global flag) - return all elements

// MATCH ALL
console.log('-- Match ALL')
const matchALL = text.matchAll(pattern);
for (const match of matchALL) {
    console.log(match);
}

// REPLACE
const replacedText = text.replace(pattern, '*****');
console.log(replacedText);

// SPLIT
let input = 'first.second/third|forth';
const words = input.split(/[\.\/|]/g);
console.log(words); // returns split array with
