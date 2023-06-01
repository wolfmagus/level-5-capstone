// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// secondLargest([25, 143, 89, 13, 105]) ➞ 105

// secondLargest([54, 23, 11, 17, 10]) ➞ 23


    //arrange the numbers from smallest to largest
    //remove the largest number in the array
    //return the next value in the array

    
    //function secondLargestNumber(numbers){
        
        //arrange the numbers from smallest to largest
        //const sortedNumbers =  numbers.sort(function(a, b){return b-a});
        
        //remove the largest number in the array
        //sortedNumbers.shift()

         //return the next value in the array
//         function checkNumber(number) {
//             return number; //find() wi return the first number in the array that meets this condition 
//           }
        
//           return sortedNumbers.find(checkNumber)
        
//      }


// console.log(secondLargestNumber([100,2,1,15,82]))
// console.log(secondLargestNumber([10, 40, 30, 20, 50]))
// console.log(secondLargestNumber([25, 143, 89, 13, 105]))
// console.log(secondLargestNumber([54, 23, 11, 17, 10]))

// function removeLeadingTrailing(num){
//     let splitNum = num.split("") // this splits the number individually into an array
//     for(let i = 0; i < splitNum.length; i++){  //starting at the index of 0, goes throug hthe length of the array
//         if(splitNum[i]  <= 1){ // if the split number is great than 1, then retrn that number, if there is zero before/after remove
//            splitNum.shift()
//           // shifting the zeros off 
//         } 
//     }
    
    
// }

//  removeLeadingTrailing("0560")

//  for(let j = 0; j < newNum.length; j++){          
//     if(newNum[j] >= 1 ){
//         // newNum.pop()
//         console.log(newNum)
//     }
//map through an array of string numbers
// remove the zeros from the front = use shift on the string number
//remove the zeros from the back = use pop on the string number
//return the new string number 

// function removeEndZeros(array){
//     //Map will look through all the numbers in the array and find all the zeros at the begining of the number and the end. It will remove all the zeros. 
//     array.map(function(numbers){ 
//         //Write an if statement that checks for zeros at he beginning of a number and remove the zeros
//         if(numbers[0] === 1){
//             numbers.shift()
//         }
//         console.log(numbers)
//      })
     
// }

// console.log(removeEndZeros(["0","1","0"]))

//Array of Multiples
//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// function arrayOfMultiples(num, length){
// var resultsArray = [];
// for(i = 1; i <= length; i++){
//     resultsArray.push(num * i)
// }
//   console.log(resultsArray)
// }



// //Examples
// arrayOfMultiples(7, 5)  
//[7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
//Notes
//Notice that num is also included in the returned array.

const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
  const newPeopleElements = arr.map(name=> {
    return `<h1>${name}</h1>`
    
  })
  return newPeopleElements
}

console.log(peopleElements(people))