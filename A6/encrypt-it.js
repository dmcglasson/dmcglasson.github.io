/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  /**
   * Initializes the application by setting up event handlers.
   */
  function init() {
    console.log("Window loaded!");
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();

/**
 * Shifts each letter in the input text by one position in the alphabet.
 * Non-alphabetic characters are not changed.
 * @param {string} text 
 * @returns {string}
 */
function shiftCipher(text) {
  let result = "";
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char >= 'a' && char <= 'z') {
      let shiftedCharCode = ((char.charCodeAt(0) - 97 + 1) % 26) + 97;
      result += String.fromCharCode(shiftedCharCode);
    } else {
      result += char;
    }
  }
  return result;
}

/**
 * Resets the input text area to be empty.
 */
function handleReset() {
  document.getElementById("input-text").value = "";
}