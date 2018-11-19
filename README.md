9 CARDS EXAMPLE

Here, we write the jQuery code.
We're using the box class and an on("click") function.
We're going to use a variable called classNames.
And we're saying that the space is what we're splitting them by here.
And we are going to change the background color to green.
Our elements have two classes. This means our classNames variable is assigned to a string containing both classes, card and 1.
In order for this function to work, we need to split the string 'box 1' wherever we encounter a space.
So we achieve this using split().
This will give us an array containing two strings.
The first string will be box and the second one will be 1

If statement
 It is introduced an if statement to check the RGB value of the element. We want to know if it's green.
a) qe change everything to green.
If the RGB value is equal to 0, 128, 0 (green), then we want to change it to lightblue.
We do this by setting the background color to 	173-216-230.
If the value is not green, then we'll set all the boxes to lightblue.
We do this to ensure there are no other green boxes.

b) now only what we want goes to green.
 After that, we'll just have all the boxes that have the same number class set to green.
We've also created the boxClass and className variables.
We use these variables to store each string in our classNames array.
boxClass is equal to box.
className is equal to the number class on that element, which could be 1, 2 or 3.
Within the else statement, we turn all elements with a boxClass lightblue and then change the color 
of all elements with the same className as the clicked element to green.
Now if we run the code, you can just click them on and off, depending on whether they're 1, 2, or 3.
Note: works better if you dont mix  the notation of the colors.

CHALLENGE IF
Return to your cards page: When a stream is clicked in the nav, that stream’s 
cards will transition and change background-color. When another stream is clicked,
only that stream will transition and change background-color.

This one is a bit trickier, but the idea is the same. Here give each list item
in the navbar an individual id of stream1, stream2, and stream3. Each of our 
card elements will also have a class of stream1-card, stream2-card, or stream3-card. 
When we click on one of the list items in the navbar, we need to get the id of that 
list item using the this keyword. Once that has been achieved, use that value to 
target any elements that use that as a class name.
