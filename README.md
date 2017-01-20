# tabata-timer
Tabata Style Timer - a tough project

This timer was built to help myself during my HIIT (High Intensity Interval Training) Cardio Routines.

It works when the user specifies a time for which he wants to do a exercise and how long does he wants to rest.
User also indicates how many sets per exercise.

Main Challenges and learning points:

(1) Length of code - it was almost 100 lines  -  I realised the importance of commenting everything from the start otherwise confusion will creep in about the variable names and values.


(2) Its easy to extract the seconds from a date object but its vey hard to make them work in your own way. For example - I wanted to start the timer at 0 but the timer would start at random numbers like 5, 47,etc because they were the seconds that the clock was on at different times. To resolve this, I had to create a fake timer that would count every time the setTimeout() function would run.


(3) Similarly, I had to create another counter that would count the number of sets or rather the set that the function was currently on. Turns out, creating counter is a great way to leverage from other variables if they are firing off continously.


(4) Although we shouldn't pollute the global space with a lot of variables, but sometimes defining a variable globally is the only way to access it at different times in the code and the same applies while assigning functions to variable values. Through such globally declared values we can access a function even if its nested in 50 other different functions.


(5) Whenever a form or input box or textarea element is defined, it can be assigned a placeholder value or simple a value. placeholder works like a faded reminder in the background for the user so he knows what to input and it goes away as soon as the user starts to type. But a simple value appears as a text inside the box which may or may not disappear when the user starts to type.


(6) With buttons, make sure their padding is appropriate so they don't appear squished and remember to enclose them in a div so they can be moved around easily. Make the div a block but keep the buttons as inline since its easier to work that way.


(7) with every project, I am more and more convinced that a lot of debugging comes down to scope and closure. I am quite confident now with the rules of javascript compiling and traversing methods, so usually I am able to find my own mistakes and bugs.


(8) Also remember to define the value that is to be used in a function before the function. Otherwise javascript won't read its value even if its on the line right after the function. Code is read from top to bottom so make sure you follow the sequence. 


(9) In case of functions that are repeated, javascript remembers the last value that was assigned to a variable or timer. So be sure to erase it or mould the code accordingly. So if a variable exists in the scope of a nested function only, when javascript gets to it the second time around, it will remember the last value that the variable had. In case of global variables, it is clearly evident.
