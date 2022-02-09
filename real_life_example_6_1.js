function update() {
  console.log("updated click");

  var input = document.getElementById("my_input");
  console.log(input.value);

  var output = document.getElementById("output");
  output.innerHTML = input.value;
}
