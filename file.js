const input = document.getElementById("text-box")
const display = document.getElementById("display")
// console.log(input)
// console.log(button)
// console.log(display)

// const morseCode = {
//   a: " .- ",
//   b: " -... ",
//   c: " -.-. ",
//   d: " -.. ",
//   e: " . ",
//   f: " ..-. ",
//   g: " --. ",
//   h: " .... ",
//   i: " .. ",
//   j: " .--- ",
//   k: " -.- ",
//   l: " .-.. ",
//   m: " -- ",
//   n: " -. ",
//   o: " --- ",
//   p: " .--. ",
//   q: " --.- ",
//   r: " .-. ",
//   s: " ... ",
//   t: " - ",
//   u: " ..- ",
//   v: " ...- ",
//   w: " .-- ",
//   x: " -..- ",
//   y: " -.-- ",
//   z: " --.. ",
//   0: " ----- ",
//   1: " .---- ",
//   2: " ..--- ",
//   3: " ...-- ",
//   4: " ....- ",
//   5: " ..... ",
//   6: " -.... ",
//   7: " --... ",
//   8: " ---.. ",
//   9: " ----. ",
//   "   ": "      ",
// };


import { translate } from "./testable.js"

input.addEventListener("input", () => {
  const result = translate(input.value)
  display.innerHTML = result
})


// console.log(translate("a"));
// console.log(translate("hello"));
// console.log(translate("Jake says HELLO WORLD"))


  //allow the user to type in multiple characters and have this function make a string of the morse equivelant of those typed characters. - done

  //1-done 
  //take a string and turn it into an array. eg "hello" = [h, e, l, l, o]
  //2-done 
  //loop through or map over the array (keys) to create a new array of the (values) morse
  //

  //input should = letter from A-Z = key
  //translation = value from the key