"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// make a let variable to determine who has descendants
// make a let variable to determine every objects age
// make a let variable to change id number to their names


// app is the function called to start the entire application
// function getAge(DOB) {
//     var today = new Date();
//     var birthDate = new Date(DOB);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age = age - 1;
//     }

//     return age;
// }

function app(people)
{
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType)
  {
    case 'yes':
      var foundPerson = searchByName(people);
      mainMenu(foundPerson, people);
      break;
    case 'no':

      var searchTrait = promptFor("Do you know any of this persons physical features?", yesNo).toLowerCase();
      switch(searchTrait)
    {
        case 'yes':
         var searchMultipleTraits = promptFor("Do you know multiple physical features?", yesNo).toLowerCase();
          switch (searchMultipleTraits)
      {
            case 'yes': // function for multiple traits
            var multipleArray = multipleTraits(people);
            break;
            case 'no' :
            var singleTrait = oneTrait(people);
            break;
      }
      break;
      case 'no':
    alert("Then what the fuck do you expect us to do");
    break;
    }
      default:
    app(people);
      break;
  }
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
    //This map just adds a space between names
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
  personInfo += "Descendants" + descendants(people) + "\n";
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
var parentsId = descendants();
function descendants(people){
  return displayPeople();
  if(person.parents === 0){
  }
  else{
      return displayPeople(person.push)
  }
}
descendants();

  // var personDescendants = "Descendants: " + person.descendants;
  // alert(personDescendants);

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

function oneTrait(people)
{
  var singleTrait = prompt("What information about this person do you know?\ngender\nage\nheight\nweight\neye color\noccupation")
  switch(singleTrait){
  case 'gender':
  var genderArray = selectGender(people);
  break;
  case 'age':
  var ageArray = selectAge(people);
  break;
  case 'height':
  var heightArray = selectHeight(people);
  break;
  case 'weight':
  var weightArray = selectWeight(people);
  break;
  case 'eye color':
  var eyeArray = selectEye(people);
  break;
  case 'occupation':
  var occupationArray = selectOccupation(people);
  break;
  default:
  oneTrait(people);
}
}
// ======================================================================================================================================================
function selectGender(people)
{
  var findGender = prompt("Please enter the person's gender male or female.  Else enter the word skip")
  var genderArray = people.filter(function(person)
  {
    if (findGender === person.gender){
      return true;
    }
    else if(findGender === "skip"){
      return (people);
    }
    else
    {
      return false;
    }
  });
    return(genderArray);
}

function selectHeight(people)
{
  var findHeight = prompt("Please enter the person's height in inches.  Else enter the wor skip")
  var heightArray = people.filter(function(person)
  {
    if (findHeight == person.height){
      return true;
    }
    else if(findHeight === "skip"){
      return (people);
    }
    else
    {
      return false;
    }
  });
    return(heightArray);
}

function selectWeight(people)
{
  var findWeight = prompt("Please enter the person's weight in lbs.  Else enter the word skip")
  var weightArray = people.filter(function(person)
  {
    if (findWeight == person.weight){
      return true;
    }
    else if(findWeight === "skip"){
      return (people);
    }
    else
    {
      return false;
    }
  });
    return(weightArray);
}

function selectEye(people)
{
  var findEye = prompt("Please enter the person's eye color.  Else enter the word skip")
  var eyeArray = people.filter(function(person)
  {
    if (findEye === person.eyeColor){
      return true;
    }
    else if(findEye === "skip"){
      return (people);
    }
    else
    {
      return false;
    }
  });
    return(eyeArray);
}

function selectOccupation(people)
{
  var findOccupation = prompt("Please enter the person's occupation.  Else enter the word skip")
  var occupationArray = people.filter(function(person)
  {
    if (findOccupation === person.occupation){
      return true;
    }
    else if(findOccupation === "skip"){
      return (people);
    }
    else
    {
      return false;
    }
  });
    return(occupationArray);
}

function selectAge(people)
{
  var findAge = prompt("Please enter the person's age.")
  var ageArray = people.filter(function(person)
  {
    if (findAge == person.age){
      return true;
    }
    else
    {
      return false;
    }
  });
    return(ageArray);
}

//================================================================================================================================
//potential to improve user experience after we're done with other stuff.  it still works
function multipleTraits(people){
  var gender = selectGender(people);
  if(gender.length === 0){
    alert("Can't find the person you're looking for")
  }
  else if(gender.length === 1){
    return displayPeople(gender);
  }
  else{
  var height = selectHeight(gender);
  if(height.length === 0){
  alert("Can't find the person you're looking for")
  }
  else if(height.length === 1){
    return displayPeople(height);
  }
  else{
  var weight = selectWeight(height);
  if(weight.length === 0){
    alert("Can't find the person you're looking for")
  }
  else if(weight.length === 1){
    return displayPeople(weight);
  }
    else{
  var eye = selectEye(weight);
  if(eye.length === 0){
    alert("Can't find the person you're looking for")
  }
  else if(eye.length === 1){
    return displayPeople(eye);
  }
  else{
  var occupation = selectOccupation(eye);
  if(occupation.length === 0){
    alert("Can't find the person you're looking for")
  }
  else{
    return displayPeople(occupation);
  }
}
}
}
}
}
//
//





