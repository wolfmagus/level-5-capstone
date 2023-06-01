var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// Loop through the following array and count how many "computers" there are. Log the final count
var count = 0
for(var i = 0; i < officeItems.length; i++ ){
// if the current string in the array is is equal to computer add 1 to the variable count
    if(officeItems[i] === "computer"){
        count++
    }
}

console.log(count)
// *** MINOR BUG - If the first value is not old enough the gender will be undefined
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    },{
        name: "Mike",
        age: 12,
        gender: "male"
      }
  ]
// Loop through the following array and log to the console "old enough" if they are 18 or older,
// and "not old enough" if they aren't 18.
  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    // if object has an age value of 18 or more log old enough, else log not enough
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
        var gender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender
        var matchedGender = (gender === "male" ) ? "him" : "her" ;
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough to see Mad Max, let ${matchedGender} in.`)
        
        
        //console.log(matchedGender)
    }   else{
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see Mad Max, don't let ${matchedGender} in.`) 
        //don't let ${peopleWhoWantToSeeMadMaxFuryRoad[i].gender} go.`)
    }
  }