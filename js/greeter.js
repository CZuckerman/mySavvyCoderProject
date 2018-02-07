var name = prompt("Hi there! What's your name?");
var output = document.querySelector('#greeting');
output.innerHTML = "<p>Thanks for visiting " + name + " ."

var checkName = function(){
  if(name === "") {
    name = prompt('What is your name, for real this time?');

    checkName(); // repeats until a name exists
  }
}

checkName(); // kicks off the name-checking the first time

alert('Hello ' + name);
