// now callling function of bindings button

// updated_bindings_button(); this will not do any bindings as it gives an error because the document is not
// yet loaded.

// use the built in function of window.onload =  updated_bindings_button();

// this will help to do the bindings when the object of the document will be prepared
// and when the window loads

// at the time of reload a unanimous function will be declared, called, and executed

window.onload = function () {
  var button = document.getElementById("todo");

  //   this is pass by reference

  // we are not calling the function

  button.onclick = function () {
    console.log("handling todo button");
  };
};
