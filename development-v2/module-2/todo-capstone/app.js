// Cache frequently used DOM elements
const items = document.getElementById("items");
const addItemForm = document.forms["addItem"];
const inputBox = addItemForm.elements["title"];

// Consolidate API requests
function getData() {
  axios.get("https://api.vschool.io/roymaegus/todo")
    .then(response => {
      // Use Array.forEach() to append elements to the DOM
      response.data.forEach(item => {
        const h4 = document.createElement("h4");
        h4.textContent = item.title;

        const img = document.createElement("img");
        img.setAttribute("src", item.imgUrl);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.id = "delete-button";

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = item.completed;
        checkBox.id = "check-box";

        if (checkBox.checked) {
          h4.classList.add("line-through");
        }

        const itemContainer = document.createElement("div");
        itemContainer.appendChild(h4);
        itemContainer.appendChild(img);
        itemContainer.appendChild(deleteButton);
        itemContainer.appendChild(checkBox);

        items.appendChild(itemContainer);

        checkBox.addEventListener("click", () => {
          axios.put(`https://api.vschool.io/roymaegus/todo/${item._id}`, { completed: checkBox.checked })
            .then(response => console.log(response.data))
            .catch(error => console.log(error));

          if (checkBox.checked) {
            h4.classList.add("line-through");
          } else {
            h4.classList.remove("line-through");
          }
        });

        deleteButton.addEventListener("click", () => {
          axios.delete(`https://api.vschool.io/roymaegus/todo/${item._id}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error)); // <-- Added the closing parenthesis here
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
}