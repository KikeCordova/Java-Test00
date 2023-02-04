### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?
the new version (v.6) for java standards, introduced new featurs

###### 2- Name 3 examples of ES6 features which you learnt.
.map, arrow functiion, EventListener 

###### 3- What is the difference between let and const?
"let" can be reasigned and "const" can not be reasignes

###### 4- How do you access object values? Give 3 examples
getElementById, .map, getElementByName

###### 5- What does setInterval and setTimeout do?
it set a brake for a specified amount of time and it jumps to the next line 
until time is over it goes back to the previous line. 

What will be the output of the following ?

# FIRST
```
 for (var i = 0 ; i < 5 ; i++) {
       setTimeout(() => {      //A: i increase 5+ every time
       console.log(i);
}, 0);
}
```

# SECOND
```
 for (let i = 0 ; i < 5 ; i++) {
       setTimeout(() => {          //A: i increase 5+ every time
       console.log(i);
}, 0);
}
```


###### 6- What are promises?
like the promises in rl, yo got to archive something, sometimes 
you sucess and sometimes you dont, is an object in JS and it produces 
a value after a async operation complets sucessfuly 

###### 7- Convert this async function to async/await

```js
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
  console.log(err);
});
// after this line,

```
  
###### 8- Convert this code to arrow function.

```js
function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,

``js
let greeting1 = (firstname, lastname) => `Hello ${firstname} ${lastname}`;
```

###### 9- Explain what a callback function is.
when you call a function with another function, 

###### 10- What does the functions pop and push do to an array? And what do they return ?
pop removes an item from the array and push, adds an item to the array, to the end. it returns an array

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```
//A: 123

###### 12- What data type would Array.map() and Array.filter() return?
array.map return a value, a new array and elements of the array
array.filter returns an element if it pases the test or an empty array if it does not passes the test 

Additionally what will be the output of this ?

```
let array = [1,2,3, 0, 4,10, 0];
let output = array.filter((item) => item);

//A: 0,1,2,3,4,5,6,7
```

###### 13- What data type would Array.includes() and Array.some() return?
array.includes returns true or false, depending or not if the array contains an specified value
array.some returns a value that if is true, it ends the iteration

###### 14- Write down the 4 main methods of rest api
HTTP, HTTPS, Get, Put, Delete, Fetch

###### 15- What is the difference between JSON and a JavaScript object?
json cant contain function and JS can, json can be used in other programming languages and js only in js

#### 16 - Use this endpoint and fetch the output using FETCH API and print them on the console. Use both .then and catch and try and catch block as well.

```
https://www.boredapi.com/api/activity
```

The above API returns what to do when you are bored.

{"activity":"Catch up on world news","type":"recreational","participants":1,"price":0.05,"link":"","key":"6596257","accessibility":0.07}