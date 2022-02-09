// now callling function of bindings button

// updated_bindings_button(); this will not do any bindings as it gives an error because the document is not
// yet loaded.

// use the built in function of window.onload =  updated_bindings_button();

// this will help to do the bindings when the object of the document will be prepared
// and when the window loads

// at the time of reload a unanimous function will be declared, called, and executed

window.onload = function () {
  var button = document.getElementById("btnadd");

  //   this is pass by reference

  // we are not calling the function

  button.onclick = handle_todo_button;
};

// in the following function we are creating a new node of li and us node ko is previous node keh
// andar joh apki todos ki unordered list hai us keh andar app add up append kar deyn geh by using
//  using appendchild ...

function handle_todo_button() {
  var newtodo = document.getElementById("inputnewtodo").value;

  var todos = document.getElementById("todos");

  var newtodotextnode = document.createTextNode(newtodo);

  var newli = document.createElement("li");

  newli.appendChild(newtodotextnode);

  todos.appendChild(newli);
}

// this part is wrong no need of doing this{
// todos.innerHTML =
//     todos.innerHTML +
//     "<li> a new item in the list will be added and a new todo will appear here </li>"; // }

// function deletetodo(event) {
//   var present_tag = event.target;

//   present_tag.parentNode.removeChild(present_tag);
// }

// the below following lines delete the current buttons of the events fired... but not the list items
// inside the unordered list

//  var present_tag = event.target; present_tag.parentNode.removeChild(present_tag);

// now in order to delete the list items as well we will do this ...

function deletetodo(event) {
  var present_tag = event.target;
  var li = present_tag.parentNode;
  li.parentNode.removeChild(li);
}

// the below line means that the li kah joh parent node hai yahni todos us main sey child ko
// remove kardou which is itself that list item ...

// li.parentNode.removeChild(li);
