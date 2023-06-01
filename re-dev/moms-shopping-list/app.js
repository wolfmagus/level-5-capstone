//Create a form that takes inputs from a user and adds them to a list
// Access the Document object and bring in form from html and set it to a variable
const form = document.addItem
//Create an event listener that triggers when the user submits information to the form that will be added to the list
form.addEventListener("submit", function(e){
    e.preventDefault()//Prevent refreshes
//Elements created
const inputBox = document.getElementById("input")//Get the input box from the html side and assign to variable
const listItem = document.createElement("li")//Create list item variable
const deleteButton = document.createElement("button")//Create a delete button
const editButton = document.createElement("button")//Create a edit button
// Elements defined
listItem.textContent = inputBox.value// Set text content to list item 
deleteButton.textContent = "Delete"
editButton.textContent = "Edit"
//delete button function 
deleteButton.addEventListener("click", function() {
    listItem.remove()
})
//edit button function 
editButton.addEventListener("click", function() {
    const tempInputBox = document.createElement("input")//Create input box for edit
    const saveButton = document.createElement("button")//Create save button to confirm edit
    saveButton.textContent = "Save"
    
    listItem.append(tempInputBox)//Attach temporary input box
    listItem.appendChild(saveButton)//Attach save button
//Trigger edit when save button is pressed 
    saveButton.addEventListener("click", function() {    
        listItem.textContent = tempInputBox.value// Set text content to list item 
        listItem.append(deleteButton)//Attach delete button to item
        listItem.append(editButton)//Attach edit button to item
    })
})
// Misc.
console.log(listItem)//test
form.input.value = "" // Clear text from input box
//Appends
document.getElementById("list").append(listItem)//Place value in list div
listItem.append(deleteButton)//Attach delete button to item
listItem.append(editButton)//Attach edit button to item
})