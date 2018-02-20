var response = prompt("Welcome to the Red Hat Development Company! You walked in the door to your new job. You don't see anyone around. You see a door in front of you, and a paper on the floor. Type 'door' to go through the next door, or type 'paper' to pick up the paper from the floor.")

for (var i=0; i<50; i++) {

  if(response===null || response = ""){
    break;
  }

switch (response) {
  case null:
    alert("Please enter a valid response, 'door' or 'paper'")
  break;

case 'door':
    response = prompt("The door is locked, there is a code panel next to the door. What do you do now? Maybe pick up the paper?");
break;

case 'paper':
    response = prompt("The paper has a number on it. Hmmm, could that be the code to open the door? Try it. Type the code that's on the paper.")
break;

case '07734':
  prompt("Congratulations, the door opened. You passed your first test! Now you opened the door, you see a chair and a window. Do you want to look out the window? Type 'window' or 'sit' to sit in the chair.")
break;

case 'sit':
  prompt("You're sitting in the chair, and see a key on the floor. To pick up the key, type 'key'.")
break;

case 'window':
  prompt("Looking out the window you see a tree. Do you want to go back outside to the tree? Type 'outside' to go to the tree.")
break;


case null:
  prompt("Please type in an answer to the last question.")


/* close switch loop */
}

/* close for loop */
}
