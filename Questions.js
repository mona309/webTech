
/*Question Bank on JavaScript Basics

1.     What are the primitive datatypes available in Javascript? With a proper example explain what is special about the “+” operator in Javascript?
2.     With an example, explain the difference between == and === operators.

    the operators "==" and "===," they will tell you if the outcome of the comparison is true or false. Even though these operators look very similar, they differ when comparing the variables' elements:

    ==: compares the value of the variables
    ===: compares the type and value of the variables

For example, 5 === "5" will return a false result. Even though the value of both variables is the same, their type is not; one of them is a String ("5"), and the other one is an Integer (5).

On the other hand,  5 == "5" will return a true result. Both variables have the same value; therefore, the result will be true.

3.    Given numstr = "456"; Convert this string into a number -
    Using mathematical operators
    Using an inbuilt Javascript utility function
    Using an inbuilt Javascript constructor function

4.    What is the output for the following snippets?

var num = 123.789;

num2 = parseInt( num );

num3 = parseInt( num, 8);

document.write(num2 + “:::” + num3);

5. With a neat block diagram, describe the components of a web application.
6. Explain the request response model of HTTP with a neat diagram.
7. Compare the GET and POST methods of HTTP request.


GET Method
	
Request parameters are sent as part of the URL. Hence, less secure compared to POST.
	
As data is sent in URL, history, caching and bookmarking the result page is possible.

Data length limited to length of URL that is typically 2048 bytes.


Data sent should be ASCII as it is sent in URL.

POST Method
Request parameters sent as part of the message body.  Hence, more secure compared to GET.

As data is sent as part of message body, history, caching and bookmarking not allowed.

No restriction on data length.

Data sent should be ASCII as it is sent in URL.

No restriction on type of data sent, it can be binary as well.



8. Write the structure of HTTP request and response messages. Write briefly about the salient components of these messages. What are the different response codes that the server may return?
9. List the different HTTP methods and write their corresponding functionality on the server.

•HTTP methods:
•GET: Retrieve static or dynamic content
•POST: Send content to server through request body
•OPTIONS: Get server or file attributes
•HEAD: Fetches only header field without any response body
•PUT: Write a file to the server
•DELETE: Delete a file on the server

10. Write a HTML page for displaying your Resume/Profile.

It should include the following:

     browser title “Name’s Profile”
    a heading with your name
    A profile picture
    Paragraph containing your address in three separate lines (address line1, address line2, city-state-pincode)
    A table containing your educational/academic record as follows

Semester
Session
Grade Point Average
->Semester
->Cumulative
Acheivements/ Projects

    An ordered list of hobbies/interests
    An unordered list of links to your online profiles (facebook/LinkedIn/instagram etc)


----------------------

Answer to Question 5 in Question Bank

What is the use of the alt property in an image tag?

“alt” property is used to specify the alternative text message to be shown if the image is not loaded or displayed. The image may not be displayed due to server error, incorrect URL, unsupported format or text based browsers. It is also used by page readers to tell a visually impaired user what the image is about.
Answer to Question 4 in QB

Explain how hypertext links can be added in a HTML document.

Links that connect web pages to one another, either within a single website or between websites.The HTML <a> tag defines a hyperlink  
Link can be added to text,by clicking on text user will navigate to the respective link which is specified in the tag.
Syntax:
<a href="Link_url" target="_blank">Click Here </a>
Link can be added to image,by clicking on image user will navigate to the respective link which is specified in the tag.
Syntax:
<a href="link_address">
<img src="Image_url" alt="Image" width="100" height="132">
</a>

------------

Write a HTML page with a summer course registration form containing the following:

    Student Name
    SRN
    Dropdown list to select department of student
    Checkboxes with course list (atleast 8 courses – 2 in a line)
    Radio button (Online or Offline mode)
    Textarea for Expectations from the courses
    Submit and reset buttons

The form should send the details to “register.php” as a “post” http request and display the response from register.php on a new tab.

---------------

Answer to Question 5 in Question Bank

    What if an input tag is created with a type that is not recognized by the browser? Will the browser ignore the tag?

         When an incorrect input type property is specified or a input type is not recognized or supported by the browser, the default input type “text” for text box is displayed by the browser.
Answer to Question 4 in QB

4. List at least five different input elements and give example code for them.

Below are the list of input elements
•Text
•Textarea
•Checkboxes
•Radio Buttons
•Dropdown list


<input type = "text" name = "Phone" size = "12" >
<textarea name = "aspirations"  rows = "3” cols = "40">
<input type = "checkbox"  name ="groceries" value = "bread">
<input type = "radio"  name = "age"value = "20-35"> 
<select name = "groceries"> 
      <option> milk </option>
      <option> bread </option>
      <option> eggs </option>
      <option> cheese </option>
    </select>

-----------------

Add style to your profile created as part of Lesson 2 assignment.

Include styles at element level, document level and using external style sheets.

Demonstrate how conflicts are resolved by adding style for the same element at two different levels.


    Write the three different ways in which styling can be applied in HTML.
    Write CSS rules for the following
        All <p> elements which are immediate children of any <div> must have the text colour set to blue and background set to yellow
        All hyperlinks must blink when the mouse moves over them.
    Give examples for different types of selectors in CSS.
    For any of the table created by you, apply the following CSS rules
        All table headings with class “important” are displayed in red color
        All other cells have a blue text
        Hover over any cell of the table changes the background color to yellow
    Why are styling rules called as “cascading”?

-----------------
    For any of the table created by you, apply the following CSS rules
        All table headings with class “important” are displayed in red color
        All other cells have a blue text
        Hover over any cell of the table changes the background color to yellow

Answer:
th.important {

        color: red;

}
td {

        color: blue;

}
td:hover {

        background-color: yellow;

}
Answer to Question 1 in QB

1.Write the three different ways in which styling can be applied in HTML.

Answer:

Inline Style - CSS is placed directly into the HTML element.

Internal Style Sheet /Embedded Style Sheet - CSS is placed into a separate area within the <head> section of a web page using <style> tag.

External Style Sheet - CSS is placed into a separate file and "connected" to a web page.  

--------------
Assignment on CSS - Box Model and Position

Further beautify the profile created by using box properties like border/margin/padding to improve the spacing between elements (like list elements/table cells). Also, position the interests and online profiles next to each other as follows using <div> tags

Interests:              Online Profiles:

    A                        A
    B                       B
    C                       C 


Question Bank on CSS - Box Model and Position Property

    With a neat diagram briefly explain the CSS Box Model
    What are the different ways in which an XHTML element can be “positioned” using CSS? Explain with an example.
    What is the significance of the <span> and <div> tags with regard to styling?
    Add a logo to a HTML page. The logo should always remain in the top right corner even if the page is scrolled. Set the position property accordingly.


    ---------------

    What is the significance of the <span> and <div> tags with regard to styling?

 

<span> is used to style a part of the paragraph.

Example:

<p>This is an <span style=”color:red”>important</span> message.</p>

 

<div> is used to group a set of elements and apply style uniformly to all elements under it.

Example:

<div style=”text-align:center”>

            <h3>…</h3>

            <p>…</p>

</div>
Answer to Question 2 in QB

2.What are the different ways in which an XHTML element can be “positioned” using CSS? Explain with an example.

Answer:

    CSS introduced the position property and a capability to control how  and where page elements are displayed
    Position property values:
        Absolute
        Relative

 

Absolute

 

<style>

h2 {

  position: absolute;

  left: 100px;

  top: 150px;

}

</style>

 

Output: h2 heading with an absolute position

 

Relative

 

<style>

h2.pos_left {

  position: relative;

  left: -30px;

}

</style>

Output: h2 heading is moved left according to its normal position


----------------------
Write a Javascript program that draws a square with asterisks. There has to be two spaces between the asterisks in a line and a line break between two lines.
Note: You can use document.write() to print to the browser window.
****
****
****
****


1. What are the primitive datatypes available in Javascript? With a proper example explain what is special about the “+” operator in Javascript?

2. With an example, explain the difference between == and === operators.

3. Given numstr = "456"; Convert this string into a number -

    Using mathematical operators
    Using an inbuilt Javascript utility function
    Using an inbuilt Javascript constructor function

4. What is the output for the following snippets?

var num = 123.789;

num2 = parseInt( num );

num3 = parseInt( num, 8);

document.write(num2 + “:::” + num3);

5. What will be the value of variable x after the following JavaScript code is executed?

function createMultiplyer(multiple){

n=multiple;

return function(num) { return num*n; }

}

var fiveMultiplyer=createMultiplyer(5);

var n=10;

var x=fiveMultiplyer(10)

---------------
Primitive data types are the built-in data types provided by JavaScript. They represent single values and are not mutable. JavaScript supports the following primitive data types:

    Number data type in JavaScript can be used to hold decimal values as well as values without decimals. let x = 250; let y = 40.5;
    The string data type in JavaScript represents a sequence of characters that are surrounded by single or double quotes.let str = 'Hello All'; let str1 = "Welcome to my new house";
    This means that a variable has been declared but has not been assigned a value, or it has been explicitly set to the value `undefined`. let x; console.log(x);
    The boolean data type can accept only two values i.e. true and false. let x; console.log(x) 

 

   5. This data type can hold only one possible value that is null. let x = null; console.log("Value of x=" + x);

 
Answer for Question 5

What will be the value of variable x after the following JavaScript code is executed?

function createMultiplyer(multiple){

n=multiple;

return function(num) { return num*n; }

}

var fiveMultiplyer=createMultiplyer(5);

var n=10;

var x=fiveMultiplyer(10)

createMultiplyer is called with multiple as 5, creating a new function fiveMultiplyer. This fiveMultiplyer function is then called with an argument of 10, returning the result of multiplying 10 by 5, which is 50. Therefore, the output is x = 50.
Answer to Question 3 in Question Bank

    Given numstr = "456"; Convert this string into a number -

    Using mathematical operators

 

let num = numstr – 0;

// numstr will be converted to number to perform subtraction

 

    Using an inbuilt Javascript utility function

 

let num = parseInt(numstr);

// By default numstr will be converted into a decimal number (base 10)

 

    Using an inbuilt Javascript constructor function

 

let num = new Number(numstr);

//creates a new Number with the value specified in numstr
Answer to Question 4 in Question Bank

    What is the output for the following snippets?

var num = 123.789;

num2 = parseInt( num );

num3 = parseInt( num, 8);

document.write(num2 + “:::” + num3);

 

Answer: 123:::83

parseInt(num, 8) refers to the value with base 8. 

------------------

Write a JavaScript function calc() that takes the first parameter as the operation to be performed and one or more operands as the other 
parameters. The first argument should be treated as a function reference that appropriately calls the function to perform the actual operation.
 That is, there should be multiple functions for each operation (like add, increment etc.).

 Question Bank on JavaScript Arrays, Functions and Hoisting

    Explain the concept of variable and function hoisting. What is the output of the following code?

var salary = “1000$”

function giveHike() {

            console.log (“Original salary was” + salary);

            var salary = “2000$”

            console.log (“My new salary is” + salary);

}

 

    What will be output of the following code:

function myfunc(x,y){

            return x + y;

}

console.log (myfunc(10));

console.log (myfunc(10,20,30));

How can the third argument (that is 30) be accessed within the function?

    What is the output of the following code?

var x = 100;

 

function hoist() {

  // A condition that should not affect the outcome of the code

  if (false) {

    var x = 200;

  }

  console.log(x);

}

 

hoist ();

    Write a function add that takes variable number of integer arguments and returns the sum of the argument values passed.
    Write a function reverse that takes a variable number of strings as argument and prints the strings in the reverse order in the console.
    What is the output of the following code? Will it result in an error or show some output?

var a = [1,2,3];

a[10] = 6;

console.log (a.length + a[6]);


----------------

Answer to Question 6 in Question Bank

6. What is the output of the following code? Will it result in an error or show some output?

var a = [1,2,3];

a[10] = 6;

console.log (a.length + a[6]);

Output: 11undefined

Explanation: a.length will be set to 11 when a new element is added at index 10. a[6] is undefined hence the output will be 11 + “undefined” resulting in a concatenation
Answer to Question 4 in Question Bank

Write a function add that takes variable number of integer arguments and returns the sum of the argument values passed.

Output:

function add(x, y) {

return x+y;

}

console.log(add(2, 3)); // 5

console.log(add(-1, 1)); // 0

 

-------------------

Two ways to remove array element at a given index position:
1. delete operator
let arr = [1,2,3,4,5]
delete arr[2]
console.log(arr)
Array(5) [ 1, 2, <1 empty slot>, 4, 5 ]
// replaces the element with an "undefined" element (equivalent of removing the element)
2. splice method
arr=[1,2,3,4,5]
console.log(arr)
Array(5) [ 1, 2, 3, 4, 5 ]
let rm = arr.splice(2,1) // remove 1 element from index 2
console.log(rm)
Array [ 3 ] // returns array with removed elements
console.log(arr)
Array(4) [ 1, 2, 4, 5 ]
let rm = arr.splice(2,1,7,8) // remove 1 element from index 2 and add 7 and 8 at that position
console.log(rm)
Array [ 4 ]
console.log(arr)
Array(5) [ 1, 2, 7, 8, 5]


Write a function convert which would convert an array into string or string into an array.

The function checks the number of arguments that are passed. (use ...args for variable arguments)

If only one argument is passed, it converts the string into an array (using the split method) and returns the array.

If more than one argument is passed, it appends each argument to a string and returns the string. (use array.join method).


Question Bank on JavaScript - Builtin Objects

    What is the output for the following snippets?

arr = new Array(19,17,15,13,11,9,7,5,3,1);

document.write( arr.sort());

How do we make the sort method use a different sorting mechanism?

    Write code snippet to generate a random number between 100 and 200.
    Please read the function given below and answer the questions below.

function  f1(s) {

            s = s.split(‘’);

            var len = s.length, halfIndex = Math.floor(len/2) – 1, tmp;

            for (var i=0; i<= halfIndex; i++) {

                        tmp = s[len-i-1];

                        s[len-i-1] = s[i];

                        s[i] = tmp;

            }

            return s.join(‘’);

}

        What is the output of console.log(f1(“stressed”));
        What is the output of console.log(f1(“desserts”, “exhausted”));
    What will be the output of the following code:

for (var i = 0; i < 5; i++) {

       setTimeout(function() { console.log(i); }, i * 1000 );

}

Think carefully (it is a trick question) as to when the function will be called and so on.

    What is NaN? Write a code snippet which will give rise to NaN value. How can we check if a value is NaN or not. What is the output of console.log (isNaN(“123.4”)) ?
    Write a Javascript program for "Guess my magic number" game.
    a) The script first generates a magic number (random number between 1 - 100)
    b) The script should prompt the user for guessing the magic number.
    c) Depending on the user's input, the script should provide hints telling him whether his guess was more or less than the magic number. It should allow him another attempt.
    d) The script should provide a max of 10 attempts to the user after which it notifies him that he failed to guess the number.
    e) If the user does not enter any valid number on three consecutive attempts, the script ends with a message.
---------

Answer to Question 5 in Question Bank

5. What is NaN? Write a code snippet which will give rise to NaN value. How can we check if a value is NaN or not.

What is the output of console.log (isNaN(“123.4”)) ?

 

Answer:

NaN stands for Not a Number. If we try to create a number using non numeric value, the Number object is flagged as NaN.

let num = Number(“10 days”) would result in num being made a NaN.

console.log(isNaN(“123.4”) would return false.
Answer to Question 2 in Question Bank

Write code snippet to generate a random number between 100 and 200.

Output:

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
------------

Write a constructor for Vector, that represents a vector in two dimensional spaces.

It takes x and y parameters, which it should save to properties of the same name.

Give the vector a method, sum, that takes another vector as a parameter and returns a new vector that has the sum of the two vectors (add x and y values of this vector and the parameter).

Add a show method to the prototype of the Vector which displays the vector x and y values and its length (distance from (0, 0)). Write the code to demonstrate that the methods work.


Question Bank on JavaScript Objects

    Write a JavaScript function to check whether an 'input' is an array or not.

 

Test Data:

console.log(is_array('PESU'));

console.log(is_array([1, 2, 4, 0]));

 

Output:

false

true
Question Bank on JavaScript Objects

    What is the output for the following snippets?

obj = {param1:”one”, param2: “two”};

for (j in obj) {  console.log ( j ); }

    When the below code is executed, "undefined" is returned. Why? How do we fix this?

function fruit() {

var size = "small";

this.color = "red";

}

var apple = new fruit();

console.log(apple.size);

 

    Consider the code below

function Pandemic(name,symptoms) {

this.name = name;
this.symptoms = symptoms;
}

Pandemic.prototype.year = 2020;

var P1 = new Pandemic("corona","cold,cough,Fever");

//...

//...

var P10 = new Pandemic("H1N1","lungs Problem");

console.log(P10.year);

Here a new property named "year" is added to the prototype of constructor function "Pandemic".

Then 10 objects P1 to P10 of same type are created.

Justify, how adding a property to the prototype is beneficiary in this case than adding it directly to the constructor function?

 

    Look at the code below. When I query as

console.log(person1.name +"'s "+"The pet animal is "+ person1.pet.name + " " + "and it lives in " + person1.pet.shelter);

I should get the output as 

"Tom's pet animal is cat and it lives in cage".

Fill in the blanks accordingly.

function animal(name,shelter) 

{

this.name = name;

this.shelter = shelter;

}

var A1 = new animal("cat","cage");

function Person(name,age,pet) {

this.name = name;

this.age = age;

this.pet = pet;

}

var person1 = _____________________

console.log("The pet animal is "+ person1.pet.name + " " + "and it lives in " + person1.pet.shelter);


-----------------

Answer to Question 1 in Question Bank

    What is the output for the following snippets?

obj = {param1:”one”, param2: “two”};

for (j in obj) {  console.log ( j ); }

 

Output:

param1

param2

 

Explanation:

The variable j here refers to the member name or index and not the member value.
Answer to a Question in Question Bank

Write a JavaScript function to check whether an 'input' is an array or not.

Test Data:
console.log(is_array('PESU'));
console.log(is_array([1, 2, 4, 0]));

Expected Output:
false
true

Output:

var is_array = function(input) {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

-----------------------

DOM based assignment

Here is a sample HTML file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
</head>
<body>
<p><a id="w3r" type="text/html" hreflang="en-us" rel="nofollow" target="_self" href="https://www.w3resource.com/">w3resource</a></p>
<button onclick="getAttributes()">Click here to get  attributes value</button>
</body></html>
DOM based assignment

Write a JavaScript program to count and display dropdown list items in an alert window. 
Sample HTML file :

<!DOCTYPE html>
<html><head>
<meta charset=utf-8 />
<style type="text/css">
body {margin: 30px;}
</style>   
<title>Count and display items of a dropdown list - w3resource</title>
</head><body><form>
Select your favorite Color :
<select id="mySelect">
<option>Red</option>
<option>Green</option>
<option>Blue</option>
<option>White</option>
</select>
<input type="button" onclick="getOptions()" value="Count and Output all items">
</form>
</body>
</html>

DOM Manipulation

1. What are the different ways to get an element from DOM?

2.Differentiate window and document.

3.Create button with CreateElement Method(), after element is created use appendchild to include element in the document.

4. Differentiate innerHTML vs InnerText

5. What is Event? Explain with example

----------
DOM Manipulation

1.What are the different ways to get an element from DOM?

    getElementById to get a element that has the provided Id.
    getElementsByClassName to get a element by providing a class name.
    getElementsByTagName to get  elements the provided tag name.
    querySelector you will pass css style selector (jquery style) and this will retrurn first matched element in the DOM.
    querySelectorAll will return a non-live nodelist by using depth-first pre order traversal of all the matched elements. Non-live means, any changes after selecting the elements will not be reflected.
     

2. Create button with CreateElement Method(), after element is created use appendchild to include element in the document.

<html>
<body>

<p>Click the button to make a BUTTON element with text.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.body.appendChild(btn);
}
</script>

</body>
</html>


-------------
https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php#
Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link. 
Sample link and text :
[On mouse over here bold words of the following paragraph will be highlighted]
We have just started this section for the users (beginner to intermediate) who want to work with various JavaScript problems and write scripts online to test their JavaScript skill.

Events

1. List the types of events that can occur

2.What is Event Handler or Event Listener?

3. What’s the difference between ‘event.preventDefault()' and ‘event.stopPropagation()'?

4. Explain different ways to handle events?

---------
Event

1. List the types of events that can occur

    the user selects a certain element or hovers the cursor over a certain element.
    The user chooses a key on the keyboard.
    The user resizes or closes the browser window.
    A web page finishes loading.
    A form is submitted.
    A video is played, paused, or finishes.
    An error occurs.

2.What is Event Handler or Event Listener?

Each available event has an event handler, which is a block of code that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are registering an event handler.  Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

3.What’s the difference between ‘event.preventDefault()' and ‘event.stopPropagation()'?

event.preventDefault() is used to stop the default behavior of whatever element that triggered the event from happening.

If it’s used with a form element, then we prevent it from submitting.

If it’s used with an a element, then preventDefault() prevents it from navigating.

event.stopProgation() is specifically used to stop the propagation of an event and stops an event from occurring in the bubbling and capturing phase.

-------

Assignment on event handling

Demonstrate the  importance of event delegation by re-writing the following code where, an event listener was added to each of the listItems. Then, whenever they get clicked, an alert pops up. 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Practice</title>
  </head>
  <body>
    <ul>
      <li>Orange</li>
      <li>Banana</li>
      <li>Potato</li>
      <li>Apple</li>
    </ul>

    <script>
      const li = document.querySelectorAll("li");

      li.forEach(function (list) {
        list.addEventListener("click", function () {
          alert("Yes, I click");
        });
      });
    </script>
  </body>
</html>


Event Handling

1.What do you mean by Event Bubbling and Event Capturing?

2.What’s ‘event.currentTarget’?

3. Define the following methods

cancelBubble() 

stopPropagation()

preventDefault()-

cancelable()

eventPhase()

4. if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor. What is the name of the technique
---------
Event Handling
1.What do you mean by Event Bubbling and Event Capturing?

There are two ways for accomplishing event propagation and the order in which an event is received in the HTML DOM API.

These are Event Bubbling and Event Capturing. The event is directed towards its intended target in the former, whereas the event goes down to the latter element.

    Event Capturing – The process starts with the outermost element capturing the event and then propagating it to the innermost element.
    Event Bubbling – In this process, the event gets handled by the innermost element first and then propagated to the outermost element.
     

2.What’s ‘event.currentTarget’? 

event.currentTarget is the element which attached the event handler explicitly.
-------------





*/