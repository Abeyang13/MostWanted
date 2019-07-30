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

  function addAge()
{
for (let i = 0; i < people.length; i++)
{
var today = new Date();
var birthDate = new Date(people[i].dob)
var age = today.getFullYear() - birthDate.getFullYear();
var monthMath = today.getMonth() - birthDate.getMonth();
if (monthMath < 0 || (monthMath === 0 && today.getDate() < birthDate.getDate()))
{
  age--;
}
people[i].age = age;
}
}
addAge(people);


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
            case 'yes':
            var multipleArray = multipleTraits(people);
            break;
            case 'no' :
            var singleTrait = oneTrait(people);
            break;
      }
      break;
      case 'no':
    alert("Here is a list of everybody. Good luck!");
    displayPeople(people);
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
    case "info":
    displayPerson(person);
    break;
    case "family":
    var elFamilia = displayFamily(person, people);
    displayPeople(elFamilia);
    // TODO: get person's family convert spouse number to name and convert parents number to name
    break;
    case "descendants":
    var descendantsList = displayDescendants(person, people);
    displayPeople(descendantsList);
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

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender:" + person.gender + "\n";
  personInfo += "DOB:" + person.dob + "\n";
  personInfo += "Height:" + person.height + "\n";
  personInfo += "Weight:" + person.weight + "\n";
  personInfo += "Eye Color:" + person.eyeColor + "\n";
  personInfo += "Occupation:" + person.occupation + "\n";
  personInfo += "Age: " + person.age + "\n";
  alert(personInfo);
}


function displayFamily(person,people){
  var parents = displayParents(person,people);
  alert("Parents Are");
  displayPeople(parents);
  var spouse = displaySpouse(person,people);
  alert("Spouse Are");
  displayPeople(spouse);
  var children = displayChildren(person,people);
  alert("Children Are")
  displayPeople(children);
  var siblings = displaySiblings(person,people);
  alert("Siblings Are");
  displayPeople(siblings);
}
  

function displayDescendants(person, people, descendantsArray = []){
  people.map(function(el){
    if(el.parents[0] == person.id || el.parents[1] == person.id){
      descendantsArray.push(el);
      displayDescendants(el, people, descendantsArray);
    }
  });
  return descendantsArray;
}

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
  displayPeople(genderArray);
  break;
  case 'age':
  var ageArray = selectAge(people);
  displayPeople(ageArray);
  break;
  case 'height':
  var heightArray = selectHeight(people);
  displayPeople(heightArray);
  break;
  case 'weight':
  var weightArray = selectWeight(people);
  displayPeople(weightArray);
  break;
  case 'eye color':
  var eyeArray = selectEye(people);
  displayPeople(eyeArray);
  break;
  case 'occupation':
  var occupationArray = selectOccupation(people);
  displayPeople(occupationArray);
  default:
  oneTrait(people);
}
}
// ======================================================================================================================================================

function selectGender(people)
{
  var findGender = prompt("Please enter the person's gender male or female. If you do not know, enter the word skip")
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
  var findHeight = prompt("Please enter the person's height in inches. If you do not know, enter the wor skip")
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
  var findWeight = prompt("Please enter the person's weight in lbs. If you do not know, enter the wor skip")
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
  var findEye = prompt("Please enter the person's eye color. If you do not know, enter the wor skip")
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
  var findOccupation = prompt("Please enter the person's occupation. If you do not know, enter the wor skip")
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
  else if(occupation.length === 1)
  {
    return displayPeople(occupation);
  }
  else{
  var age = selectAge(occupation);
  if(age.length === 0){
  alert("Can't find the person you're looking for")
  }
  else{
    return displayPeople(age);
  }
}
}
}
}
}
}



function displayParents(person, people){
 var parents = people.filter(function(el){
    if(person.parents[0] === el.id || person.parents[1] === el.id){
      return true;
    }
    else{
      return false;
    }
  });
  return parents;
}
function displaySpouse(person, people){
  var spouse = people.filter(function(el){
    if(person.currentSpouse === el.id){
      return true;
    }
    else{
      return false;
    }
  });
  return(spouse);
}
function displayChildren(person, people, childrenArray = []){
  people.map(function(el){
    if(el.parents[0] === person.id || el.parents[1] === person.id){
      childrenArray.push(el);
    }
  });
  return childrenArray;
}
function displaySiblings(person, people, siblingsArray = []){
 people.map(function(el){
    if(person.parents.length >= 1 && person.parents[0] === el.parents[0] || person.parents.length >= 1 && person.parents[1] === el.parents[1]){
      siblingsArray.push(el);
    }
  });
  return siblingsArray;
}

