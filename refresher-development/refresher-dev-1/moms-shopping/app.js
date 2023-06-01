const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()

    const inputBox = document.getElementById("title") 
    const todoText = inputBox.value
    addItemToList(todoText)
    form.title.value = ""
    
})

function addItemToList(item) {
    //console.log(item)
    const list = document.getElementById("list")
    const grocery = document.createElement("li")
    const deleteButton = document.createElement("button")
    const editButton = document.createElement("button")
     
    grocery.textContent = item
    grocery.style.margin = "5px"
    grocery.id = "li"; 
    list.className = "list";
    
    deleteButton.textContent = "Delete";
    deleteButton.id = "delete-button";
    deleteButton.style.margin = "10px"

    editButton.textContent = "Edit";
    editButton.id = "5px";
    editButton.className = "list";
    
    
    //Add event listeners to if statement
    deleteButton.addEventListener("click", function(event) {
        event.preventDefault()
        grocery.remove()
    })
    editButton.addEventListener("click", function(event) {
        event.preventDefault()
        editItem()
    })
    
    document.getElementById("list").appendChild(grocery)
    grocery.append(deleteButton)
    grocery.append(editButton)
    
    function editItem(){
        
    //console.log(item)
    //console.log("edit button clicked")
        
    const editDiv = document.createElement("div")
    const editBox = document.createElement("input")
    const saveButton = document.createElement("button")
    const cancelButton = document.createElement("button")

    saveButton.textContent = "Save"
    cancelButton.textContent = "Cancel"

    //console.log(grocery.textContent)
        
    grocery.append(editDiv) 
    grocery.append(saveButton)
    grocery.append(cancelButton)
    grocery.append(editBox)

    saveButton.addEventListener("click", function(event) {
        event.preventDefault()
        const newValue = editBox.value
        //console.log(newValue)
        editBox.value = ""
        grocery.remove()
        item = newValue
        console.log(item)
        grocery.textContent = item
        document.getElementById("list").appendChild(grocery)
        grocery.append(deleteButton)
        grocery.append(editButton)

        //const tempDiv = document.createElement("div")
        //tempDiv.id = "temp-div"
        //tempDiv.textContent = editBox.value
        //grocery.remove(item)
        //item = tempDiv
        //console.log(item)
        //item = editBox.value
        //document.getElementById("li").prepend(item)
        //editBox.value = ""
        //console.log(document.getElementById("li"))
        //console.log(grocery.children)
        
        //console.log("Save button clicked")
        //console.log(item)
        //console.log(document.getElementById("li"))
        //item[0].find
        //document.getElementById("li").remove(item[0])
        //console.log(grocery.parentNode)
        //console.log(document.getElementById("li"))
        //form.title.value = ""
        //grocery = item
        //console.log(grocery)
        //grocery.append(item)
        //parentNode.removeChild("li")
        //console.log(editBox.value)
        //console.log(event.target)

    })

        // if(textContent === "Save"){
        //     grocery.textContent = item
        // } 
        //console.log(grocery)
        // editBox.textContent = item
        // document.getElementById("title")
        //console.log(editDiv)
        //grocery.remove()
        //inputBox = document.getElementById("title") 
        //todoText = inputBox.value
    }

}