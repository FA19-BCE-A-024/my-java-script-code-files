console.log("code started");

$(function () {
  $("#loadbtn").click(sendajax);
});

function sendajax() {
  console.log("sending ajax request");

  // send request here

  $.get("ajax_file_text_lecture_10_1.txt", handleresponse);

  console.log("ajax request sent");
}

// first ajax ki call kagyi hai toward students.txt ko through $.get() funxtion

// students.txt ka response aya hai aur joh data hai us keh andar woh apne webpage keh andar embed hogya hai

// $("#loadbtn").click(sendajax); this is the reference of function not the function call

function handleresponse(res) {
  console.log("response received");
  $("#resultdiv").empty();
  $("#resultdiv").append(res);
}

console.log("code finished");
