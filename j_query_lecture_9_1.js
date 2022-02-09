// now do bindings using the j query method

$(function () {
  // j query will execute this fnction after page load

  // so do your bindings first

  //   the below function is alredy done once so no need to repeat this yeh pehle seh hi button click

  // ko hanlde kar raha hai hai to dobara button click par kuch karwaney ki zaroorat nahi hai

  $("#addbutton").click(handle_button_clicked);

  // yeh todos unordered lists keh andar joh present list item hai us ko yeh pakarey gah

  $("#todos li").click(delete_on_click);

  //   the below code line represent the delegation of events

  $("#todos").on("click", "li", delete_on_click);
});

function handle_button_clicked() {
  //   alert("button clicked"); just for checking purposes that whether the alert function is working or not

  // what do you mean by binding ... ??

  // are we doing bindings here inside this function as well or not ask sir ... !!

  // we have made the todo variable to get the input value and appended it into todos unordred list and made it

  // a list item

  //   now to clear the bar we will add something with the following code lines

  var todo = $("#newtodo").val();

  //   now also put a validation check as well for empty todos ...

  if (!todo) {
    $("#newtodo").addClass("error");

    return;
  }

  $("#newtodo").removeClass("error");

  $("#newtodo").val("");

  $("#todos").append("<li>" + todo + "</li>");
}

// now i want to delete the current list items when i click on them ...

//  for this do this ....

function delete_on_click() {
  $(this).fadeOut();
  //   $(this).remove();
}

// now to remove a newly added list item first bind that event with the page then it will be
// successfully removed bcause initially there is no event binded with that additon of the newly
// listed item so to  make it happen do this

// for that delegate the events and  for full explanation of this statement go to sir ...
