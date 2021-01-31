// Define UI Variables

const taskInput = document.querySelector("#task"); //the task input text field

const form = document.querySelector("#task-form"); //The form at the top

const filter = document.querySelector("#filter"); //the task filter text field

const taskList = document.querySelector(".collection"); //The ul

const clearBtn = document.querySelector(".clear-tasks"); //the all task clear button

const reloadIcon = document.querySelector(".fa"); // the reload button at the top right of navigation

// Add new Task Function definition
function addNewTask(e) {
  if (taskInput.value == "") {
    // alert("Enter New Task"); removed
    taskInput.style.borderColor = "red";
    return; // Avoiding else statement
  }
  // Creat an li element when the user adds a task
  const li = document.createElement("li");
  // adding a class
  li.className = "collection-item";
  // Create text node and append it
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new element for the link
  const link = document.createElement("a");
  // Add class and the x marker for a
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);
  // Append to ul
  taskList.appendChild(li);
  taskInput.value = "";
  const dateId 

  // alert("Add New Task ..."); removed
  e.preventDefault(); // Disable from submission
}
// Clear Task Function definition
function clearAllTasks() {
  // alert("Clear tasks ...") removed

  // This is the first way
  // taskList.innerHTML = "";

  // Second Way
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
// Filter tasks function definition
function filterTasks(e) {
  // console.log("Task Filter ...");
  const itemList = document.querySelectorAll(".collection-item");
  if (filter.value == "") {
    itemList.forEach(function (member, index) {
      member.style.display = "block";
    });
  } else {
    const searchedItem = filter.value;
    itemList.forEach(function (member, index) {
      if (searchedItem == member.textContent) {
        member.style.display = "block";
      } else {
        member.style.display = "none";
      }
    });
  }
}
// Remove Task function definition
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure about that ? ")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
// Reload Page Function [BOM Object Event]
function reloadPage() {
  // using the reload fun on location object
  location.reload();
}
// Add Event Listener [Form, clearBt and filter search input]
// form submit
form.addEventListener("submit", addNewTask);
// clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);
// Filter Task
filter.addEventListener("keyup", filterTasks);
// Remove task event [event delegation]
taskList.addEventListener("click", removeTask);
// Event Listener for reload
reloadIcon.addEventListener("click", reloadPage);

// Event Bubbling
document.querySelector("#signup").addEventListener("click", function () {
  console.log("sign up button click");
});

document.querySelector("#account_link").addEventListener("click", function () {
  console.log("Account link click");
});

document.querySelector("#header").addEventListener("click", function () {
  console.log("Header click");
});

// Event Delegation
document.getElementById("buttons").addEventListener("click", function (e) {
  // step 2
  if (e.target.className == "buttonClass") {
    // step 3
    console.log("click");
  }
});
