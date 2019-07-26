"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// make a let variable to determine who has descendants
// make a let variable to determine every objects age
// make a let variable to change id number to their names



// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      var foundPerson = searchByName(people);
      mainMenu(foundPerson, people);
      break;
    case 'no':
    var oneCriteria = searchByCriteriaOne(people);
    criteriaOneSuspects(oneCriteria, people);
    //function to narrow the person down from one criteria
    //then make another prompt to ask for more information to narrow group down to one person 
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
  }
}

function criteriaOneSuspects(person, people){

  if(!people){
    alert("Could not find that individual.");
    return app(people); // restart
  }
var displaySuspects = prompt("Found" + person.firstname + " " + person.lastName + "\n" + "Do you want to know info,quit or restart?  Type your answer info, quit or restart")

  switch(displaySuspects){
    case "info": // convert date of birth to actual age
    displayPerson(person);
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return criteriaOneSuspects(person, people); // ask again
  } // ask again
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info": // convert date of birth to actual age
    displayPerson(person);
    // TODO: get person's info
    break;
    case "family":
    displayFamily(person);
    // TODO: get person's family convert spouse number to name and convert parents number to name
    break;
    case "descendants":
    displayDescendant(person);
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson[0];
}
  // TODO: find the person using the name they entered * Done

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender:" + person.gender + "\n";
  personInfo += "DOB:" + person.dob + "\n";
  personInfo += "Height:" + person.height + "\n";
  personInfo += "Weight:" + person.weight + "\n";
  personInfo += "Eye Color:" + person.eyecolor + "\n";
  personInfo += "Occupation:" + person.occupation + "\n";
  // TODO: finish getting the rest of the information to display * Done
  alert(personInfo);
}
//
function displayFamily(person){
  var personFamily = "Parents: " + person.parents + "\n";
  personFamily += "CurrentSpouse: " + person.currentSpouse + "\n";
  alert(personFamily);
}
//


// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}


//function to search one criteria of person I'm looking for
function searchByCriteriaOne(people){
  var criteriaOne = promptFor("Is person male or female?", chars);
  
  var foundSuspects = people.filter(function(person){
    if(person.gender === criteriaOne){
      return true;
    }
    else{
      return false;
    }
  })
  return foundSuspects;
}

