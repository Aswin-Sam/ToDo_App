let task = document.querySelector("#task");
let flag = document.querySelector("#flag");
let inputDate = document.querySelector("#date");
let priorityButton = document.querySelector("#priority");
let addedTasks = document.querySelector(".added-tasks");

let isPriority = false;
const DATE = new Date();
display();
function display() {
  if (localStorage.length > 0) {
    addedTasks.style = "display:flex";
    let totalItems = localStorage.length;
    let items = "";
    for (i = 0; i < totalItems; i++) {
      let item = JSON.parse(localStorage.getItem(i));
      if (item.priority) {
        items += `<div class="all-tasks" style="border-bottom: 5px solid #800000;">
        <h3 class="date-space">${item.date}</h3>
        <h3>${item.task}</h3>
        <button class="remove" id="${i}" onclick="remove(this.id)" title="Delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>`;
      } else {
        items += `<div class="all-tasks">
        <h3 class="date-space">${item.date}</h3>
        <h3>${item.task}</h3>
        <button class="remove" id="${i}" onclick="remove(this.id)" title="Delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>`;
      }
    }
    addedTasks.innerHTML = `<h1>TASKS</h1>` + items;
  }
}

function priority() {
  if (!isPriority) {
    isPriority = true;
    flag.src = "black.png";
    priorityButton.style = "background-color : #800000;color : white";
  } else {
    isPriority = false;
    flag.src = "white.png";
    priorityButton.style = "background-color : transparent;color : black";
  }

  return isPriority;
}

function isValid() {
  if (task.value) {
    if (inputDate.value) {
      let day = DATE.getDate(),
        month = DATE.getMonth() + 1,
        year = DATE.getFullYear();
      let date = inputDate.value.split("-");
      if (parseInt(date[0]) > year) {
        return true;
      } else if (parseInt(date[0]) == year) {
        if (parseInt(date[1]) > month) {
          return true;
        } else if (parseInt(date[1]) == month) {
          if (parseInt(date[2]) >= day) {
            return true;
          } else {
            alert("Enter a valid Date");
            return false;
          }
        } else {
          alert("Enter a valid Date");
          return false;
        }
      } else {
        alert("Enter a valid Date");
        return false;
      }
    } else {
      alert("Enter the date value");
      return false;
    }
  } else {
    alert("Enter The Task");
    return false;
  }
}
function add() {
  if (isValid()) {
    let item = {
      "task":task.value,
      "date":inputDate.value,
      "priority": priority()
    };
    let stringFormat = JSON.stringify(item);
    localStorage.setItem(localStorage.length,stringFormat);
    display();
  }
}
