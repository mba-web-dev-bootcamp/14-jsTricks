1) Global Context

this with no scope is the global object

in a browser, this is the window object
var person = "malcolm"
person
"malcolm"

windows.person
"malcolm"

this.person 
"malcolm"



Global context
var data = {}
data.instructor = "Elie"

this inside of a DECLARED object refers to that object

inside of a function, this still refers to the global object

"use strict" will not allow a function to create a global



2) Implicit / Object
The value of this will be the closest parent object

3) Explicit Binding
Choose what we want the context of "this" to be using 
call
apply or 
bind
(these 3 can only be used on functions)
Name of Method      |   Parameters                  |   Invoke Immediately?
Call                |   thisArg, a, b, c, d, ...    |   Yes
Apply               |   thisArg, [a, b, c, d, ...]  |   Yes
Bind                |   thisArg, a, b, c, d, ...    |   No


setTimeout(function(){
    console.log("hello world")
}, 20000);
// 20,000 miliseconds = 20 seconds


4) the 'new' keyword
    When the keyword this is used with new, 'this' then refers to the object being 'new'ed

new 
    1) Creates an object out of thin air
    2) sets the value of the keyword 'this' to be the newly created empty object
    3) it adds an implicit "return this" to the end of the function
    4) it adds the dunder-proto (__proto__) property to the newly created object
    
    
5) multiple constructors
    see 05-01
    
6) Objectives
    1) Understand what the prototype object is
    2) Describe and diagram the relationship between
        __Proto__, prototype and constructors
    3) Add methods and properties on the prototype 
        object to write more efficient code
    4) Explain the difference between adding
        methods and properies to the prototype 
        verses the constructor function
        
