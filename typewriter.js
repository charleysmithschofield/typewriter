// Typewriter exercise:

// Let's start off with a simple sentence:
// const sentence = "hello there from lighthouse labs";

// Our goal is to animate the sentence, revealing one character at a time.
// This will make it look as though it is being typed by someone.


// Let's loop through each character of the string and output it to the console.
// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   console.log(char);
// }

// The issue we see in the output is that each character is on a new line.

/*
  console.log will add a new line character (\n) to the end of the string.

  However, in Node, we can use the process.stdout.write isntead of to have more control
  and avoid automatically adding an extra "newline character" at the end each time.

   - Replace the console.log with process.stdout.write and confirm the results.
*/

// const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   process.stdout.write(char);
// }

/*
  Indeed this prints the characters out on a single line.

  However, once the script completes, the next prompt appears ont eh same line, which is
  not ideal.

  Disclaimer:
  To stay focused, let's fix the prompt issue at the very end. Although annoying, it's not
  blocking our progress atm.
*/

/*
  Delaying The Display With setTimeout:

  We want the letters to appear with a delay, and setTimeout is all about delays.

  - Add a setTimeout call within the loop, to delay the character output a bit.
*/

// const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000);
// }

/*
  Delaying Each Character Separately:

  Instead of the characters all appearing at the same time later on, we need them to
  be staggered. Perhaps each one can be 50 ms apart.

    - Implement the logic to have each letter delay its appearance by 50ms (or so)
      longer than the previous letter.
    
    In other words, the timeout delays could like something like this:

    'h' => 0 ms
    'e' => 50 ms
    'l' => 100 ms
    'l' => 150 ms
    'o' => 200 ms
    ' ' => 250 ms
    't' => 300 ms
    'h' => 350 ms
    'e' => 400 ms
    'r' => 450 ms
    'e' => 500 ms

  * Disclaimer:
    Your implementation  soudl not be tied to the example string
    We should be able to change the string from "hello there from lighthouse labs"
    to any other string to still have the animation logic workd.
*/

// To stagger the appearance of each character with a 50 ms delay, adjust the timeout
// delay based on the index of each character.

/*
  Pseudocode:

  1. Declare variable called sentence with an example sentence.
  2. Use a for..of loop to iterate through the characters of the sentence based on their index.
    2a. Split the sentence whenever it loops through a space, .split(' '). Use .entries() method to iterate the index and character.
 
  3. Inside the for loop, setTimeout for 50 ms * index. This will print the character of each index, with a delay of 50 ms.
*/


// // Declare variable called sentence with an example sentence.
// const sentence = "Raccoons are the best";

// // Use a for..of loop to iterate through the characters of the sentence based on their index.
// // .split(' ') for each space, and .entries to iterate the index of each of the characters.
// for (const [index, char] of sentence.split('').entries()) {

//   // Inside the for..of loop, setTimeout.
//   setTimeout(() => {
//     process.stdout.write(char);
//     // Delay each character by 50 ms longer than the previous one
//   }, 50 * index);
// }

/*
  Fixing the NewLine At The End:

  We still have one last thing to implement. It would be nice of the program to output a newline
  character before exiting, so that the next prompt starts on its own line.

    - Fix the bug we identified by adding a newline character at the end of the animation.
    - Tip: We can use console.log, or write \n to stdout. That said we can't output this
           character are written out to stdout.
*/

// Declare variable called sentence with an example sentence.
const sentence = "Raccoons are the best";

// Use a for..of loop to iterate through the characters of the sentence based on their index.
// .split(' ') for each space, and .entries to iterate the index of each of the characters.
for (const [index, char] of sentence.split('').entries()) {

  // Inside the for..of loop, setTimeout.
  setTimeout(() => {
    process.stdout.write(char);
    // Delay each character by 50 ms longer than the previous one
  }, 50 * index);
}

// Add setTimeout after the loop to add a newline character
setTimeout(() => {
  process.stdout.write('\n');
}, 50 * sentence.length);
