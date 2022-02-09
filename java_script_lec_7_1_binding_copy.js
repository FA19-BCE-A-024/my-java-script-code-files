console.log("starting");

function updated_todo_button() {
  console.log("handling todo button");
}

function updated_bindings_button() {
  console.log("bindings");

  var button = document.getElementById("todo");

  //   this is pass by reference

  // we are not calling the function

  button.onclick = updated_todo_button;
}

// now callling function of bindings button

// updated_bindings_button(); this will not do any bindings as it gives an error because the document is not
// yet loaded.

// use the built in function of window.onload =  updated_bindings_button();

// this will help to do the bindings when the object of the document will be prepared
// and when the window loads

window.onload = updated_todo_button;

console.log("finished");
