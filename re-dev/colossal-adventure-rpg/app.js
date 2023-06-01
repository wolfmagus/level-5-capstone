//1. Greet the player - Done
//2. Collect the players name and store it in a variable - Done
//3. Ask the player to walk - Done
//4. Wild monster has the chance to appear 1/3 - Done
//5. A random enemy appears from an array of enemies - Done
//6. The user decides whether they will run or fight
//7. If the user decides to attack a combat loop will be entered
//8. If user wins the user gets an item and bonus health
//9. If user dies the game ends and the user gets a gameover message and start new game prompt appears
//10. If the user attempts to run there will be a 50 percent chance of escape
//   if users does not escape they take damage if escape is successful user returns to run loop
//11. The user will be able to print their inventory and stats to the screen

// User prompts at the beginning of the game
const readlineSync = require('readline-sync');
const player = {
  hp: 40,
  attack: Math.floor((Math.random() * 5 + 1))
}

const goblinArray = [
  {
    name: "Goblin Trio",
    hp: 9,
    attack: Math.floor((Math.random() * 1 + 1))
  },
  {
    name: "Hob Goblin Duo",
    hp: 12,
    attack: Math.floor((Math.random() * 2 + 1))
  },
  {
    name: "Goblin Champion",
    hp: 30,
    attack: Math.floor((Math.random() * 5 + 1))
  },
  {
    name: "Goblin Witch Doctor",
    hp: 13,
    attack: Math.floor((Math.random() * 2 + 1))
  },
  {
    name: "Goblin King",
    hp: 20,
    attack: Math.floor((Math.random() * 3 + 1))
  }
]

//Greet player and ask for players name.  Store the players name in a variable. 
const playerName = readlineSync.question('May I have your name? ');
console.log('Greetings ' + playerName + '. Welcome to purgatory.');

// Prompt the use to start the game
if (readlineSync.keyInYN('Would you like to proceed?')) {
  //console.log('You begin to walk');
  walk()
} else {
  console.log('Your journey awaits...');
}

while(player.hp > 0){
  walk()
}

function walk(){
    console.log("You are in the walking function")
    const diceRollTwo = Math.floor((Math.random() * 2 + 1))
  
    if (diceRollTwo === 1){
        console.log("You take a moment to enjoy the scenery")
        
    } else if(diceRollTwo === 2){
      console.log("Something approaches! ")
    }  

    battle()
}

// This function will be called later in the battle function.
// This function determines which goblin the player will fight
function encounter(goblin){
  console.log("You have entered the encounter function")
  //const diceRollFive = Math.floor((Math.random() * 5 + 1))
  var goblin = goblinArray[Math.floor(Math.random() * goblinArray.length)]
  //goblin = goblinArray
  // If statement that uses dice roll to pick a goblin
  if(goblin.name === "Goblin Trio"){
    console.log("You have encountered a GOBLIN TRIO. We are goblins three!!!")
  } else if(goblin.name === "Hob Goblin Duo"){
    console.log("You have encountered a HOB GOBLIN DUO. Double trouble!!")
  } else if(goblin.name === "Goblin Champion"){
    console.log("You have encountered a GOBLIN CHAMPION. Ooo Yeeeah!")
  } else if(goblin.name === "Goblin Witch Doctor"){
    console.log("You have encountered GOBLIN WITCH DOCTOR. Voodoo you do!")
  } else {
    console.log("You have encountered GOBLIN KING. Bow before his majesty.")
  }

//console.log(goblin)
//let fightingGoblin = 
return goblin
}

function battle(currentGoblin){
  console.log("You are in the battle function")
  
  currentGoblin = encounter()// Determines the goblin the player will fight
  console.log(currentGoblin)

   while(player.hp > 0 && currentGoblin.hp > 0){
    console.log("You attack the goblin")
    //Subtract player attack from goblin health
    let newGoblinHp = player.attack - currentGoblin.hp
    currentGoblin.hp = newGoblinHp
    console.log(`The goblin's new HP is ${currentGoblin.hp}`)
    
    console.log("The goblin attacks you")
    //Subtract goblin attack from player health
    let newPlayerHp = player.hp - currentGoblin.attack 
    player.hp =  newPlayerHp
    console.log(`The player's ne HP is ${player.hp}`)
   }
  //console.log("You are DEAD")
 // player.hp = 0
}

 