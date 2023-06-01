let todoForm = document["addItem"]

  //Save the value entered. Then clear the value from box after entered.
  let inputBox = document["title"]
  //Variable todoText is equal to whatever value is entered into the input box.
  let todoText = inputBox.value
  addItemToList(todoText)
  todoForm.title.value = ""

   function addItemToList(item) {
  
    const items = document.getElementById("items")
    const h4 = document.createElement("li") 
    h4.textContent = item 
    items.className = "items";
   }
//POST
todoForm.addEventListener("submit", function(event){
  event.preventDefault()
//Capture new todo values
const newTodo = {
  
  title: todoForm.title.value,
  price: todoForm.price.value,
  description: todoForm.description.value,
  imgUrl: todoForm.imgUrl.value
}
axios.post("https://api.vschool.io/roymaegus/todo", newTodo)
        .then(response => {
          for(let i = 0; i < response.data.length; i++){
           
            const h4 = document.createElement('h4')
            h4.textContent =  response.data[i].title
            h4.id = "h4";
            
            let img = document.createElement('img')
            img.setAttribute("src", response.data[i].imgUrl)

            const deleteButton = document.createElement("button")
            deleteButton.textContent = "Delete";
            deleteButton.id = "delete-button";

            const checkBox = document.createElement('input');
            checkBox.type = "checkbox";
            checkBox.value = "false";
            checkBox.id = "check-box";
            
            //Places h4 in DOM
            document.getElementById("items").append(h4) 
            document.getElementById("items").append(img) 
            document.getElementById("items").append(deleteButton)
            document.getElementById("items").appendChild(checkBox) 
            
          }
    
      })
          
        .catch(error => console.log(error))
    
})
 
  //GET
  axios.get("https://api.vschool.io/roymaegus/todo")
  .then(response => {
      for(let i = 0; i < response.data.length; i++){
          //Creates h4 element 
          const h4 = document.createElement('h4')
          //Assigns response data to h4
          h4.textContent =  response.data[i].title
          h4.class = "h4";
          
          let img = document.createElement('img')
          img.classList.add("width") 
          img.setAttribute("src", response.data[i].imgUrl)


          const deleteButton = document.createElement("button")
          deleteButton.textContent = "Delete";
          deleteButton.id = "delete-button";
          
          let checkBox = document.createElement('input');
          checkBox.type = "checkbox";
    
          checkBox.checked = response.data[i].completed ;
          if(checkBox.checked){
            h4.classList.add("line-through");
          }
          checkBox.id = "check-box";
          
          //Places h4 in DOM
          document.getElementById("items").appendChild(h4) 
          document.getElementById("items").appendChild(img)
          document.getElementById("items").appendChild(deleteButton) 
          document.getElementById("items").appendChild(checkBox)
          
          checkBox.addEventListener("click", function(){
          if(checkBox.checked){
            
            axios.put(`https://api.vschool.io/roymaegus/todo/${response.data[i]._id}`,{completed:true})
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
            
                h4.classList.add("line-through")
          
          } else {
          
            axios.put(`https://api.vschool.io/roymaegus/todo/${response.data[i]._id}`,{completed:false})
                .then(response => console.log(response.data))
                .catch(error => console.log(error))

                h4.classList.remove("line-through")
    
          }

        })
          
          deleteButton.addEventListener("click", function(event){
            axios.delete(`https://api.vschool.io/roymaegus/todo/${response.data[i]._id}`)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
          })
          //create edit button
          const editButton = document.createElement("button")
            editButton.textContent = "Edit";
            editButton.id = "edit-button";

            document.getElementById("items").appendChild(editButton)

            editButton.addEventListener("click", function(){
              // PUT
              const updates = {
              
                title: todoForm.title.value,
                price: todoForm.price.value,
                description: todoForm.description.value,
                imgUrl: todoForm.imgUrl.value
              }
              //PUT REQUEST
              axios.put(`https://api.vschool.io/roymaegus/todo/${response.data[i]._id}`, updates)
                .then(response => console.log(response.data))
                .catch(error => console.log(error))
            
            })   
      }
  })
  .catch(error => console.log(error))
  