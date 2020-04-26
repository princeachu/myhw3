# myhw3
This project was a password generator web application. It was designed using HTML, CSS and Javascript.
The HTML and CSS external style file were both provided for us.
I created a script javascript file and linked it to my provied html file.

The first step was listing out the variables I would be using at the top of the script file and creating a varaiable for each of the possible charater types to be included in the password.

Then I created the funtion that would prompt the user to specify the password character length. I then looped this prompt using the while loop so as long as the conditions I set (password_length < 8 || password_length > 128) were true the prompt would continue looping until the password length selected by the user was no less than 8 and no more than 128 characters.

Next I set up another while loop this time for the different charcter types the user is prompted to confirm using the confirm function. The character types are set as booleans and given the value false listed at the top of the page. If the user doesnt choose to include any of the character types they are hit with an alert message specifying that atleast one of the chacrter types must be chosen and are looped back to the confirm messages until at least one of the types are confirmed to be included in the password. 

Next I created the function for selecting a random element from an array and within the function I set up conditional if statments so that if the different character type booleans are true meaning the user has chosen to include it in their password the function concat will run joining each chacrter type string listed at the top of the page into an empty string variable labeled user input declared at the top of the page. 

Next I created the generate password function and within the function created a for loop that updates the password variable, each time picking a random index in user Input and loops for the desired password Length chosen at the begining prompt, using the math random and math floor function to return the random inegers into the password variable. 

Finally I created the write password function that assigns the password text element a value that is equal to the password variable updated in the previous step. I then list each of these functions within the add event listener function so when the generate button is pressed each of these lines of code will begin running in order until finally the password is generated in the password text input.  
