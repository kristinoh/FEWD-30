
<script>

function fullName(fName, lName) {
  var results = fName + " " + lName;
  return results;
}

function add(n , m) {
  n = parseInt(n);
  m = parseInt(m);
  var result = n + m;
  return result;
}

var input1 = prompt("What's the first num?");
var input2 = prompt("what's the second num?");
var sum = add(input1, input2);
alert(sum);

var input3 = prompt("What is your first name?");
var input4 = prompt("What is your last name?");
var input5 = prompt("How old are you?");
var name = fullName(input3, input4);
var birthYear
var result = alert("Your name is name and you were born in birthYear.");

</script>
