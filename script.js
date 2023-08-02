let task = document.querySelector("#task");
let flag = document.querySelector("#flag");
let inputDate = document.querySelector("#date");
let priorityButton = document.querySelector("#priority");
let 

let isPriority = false;
const DATE = new Date();

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
    if(isValid()){

    }
}
