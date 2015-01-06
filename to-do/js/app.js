//Problem: User interaction doesn't provide desired results
//Solution: add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task"); // new task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //comopleted tasks

var noTODO = document.getElementById("filler-text");


var archiveHolder = document.getElementById("archive-list")

//New Task List Item
var createNewTaskElement = function (taskString) {

if (taskString == "") {
  alert("Sorry! You can't leave a TODO blank dummy!")
} else {
  //Create list item
  var listItem = document.createElement("li");

     //input (checkbox)
     var checkBox = document.createElement("input"); //checkbox
        //label
        var label = document.createElement("label");
        //input (text)
        var editInput = document.createElement("input");
        //button.edit
        var editButton = document.createElement("button");
        //button.delete
        var deleteButton = document.createElement("button");


        //each element, needs modifying

        checkBox.type = "checkbox";
        editInput.type = "text";

        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";
        deleteButton.id = "delete-button";


        label.innerText = taskString;


         //each element, needs appending
         listItem.appendChild(checkBox);
         listItem.appendChild(label);
         listItem.appendChild(editInput);
         listItem.appendChild(editButton);
         listItem.appendChild(deleteButton);

        return listItem;
      }
}



//Add a new task
var addTask = function() {
  console.log("Add task..");
  //when button is pressed
  //create a new list item with the text from #new-task:
  var listItem = createNewTaskElement(taskInput.value);
   
   //Append listItem to incompleteTasksHolder
   incompleteTasksHolder.appendChild(listItem);
   bindTaskEvents(listItem, tasksCompleted);

   taskInput.value = "";
}


//edit an existing task
var editTask = function() {
  console.log("Edit task..");
  
  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var editButton =  listItem.querySelector("button.edit");

  var containsClass = listItem.classList.contains("editMode");

    //if the class of the parent is.editMode
    if(containsClass) {
      //switch from .editMode
      //label text becomes the inputs value
    //else
    label.innerText = editInput.value;
    editButton.innerText = "Edit";
      } else {
      //switch to .editMode
      //inputs value because the label's text
      editInput.value = label.innerText;
      editButton.innerText = "Save";
      
      }
    //toggle .editMode on the parent

    listItem.classList.toggle("editMode");

    


}


//delete existing task
var deleteTask = function() {
  console.log("Delete task..");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;

    ul.removeChild(listItem);
    todoempty ();
}


//mark task as complete
var tasksCompleted = function() {
  console.log("task completed..");
    //append the task list item to the #completed-tasks ul
    var listItem = this.parentNode;
    changeDeleteArchive ();
    completedTasksHolder.appendChild(listItem);
    
    bindTaskEvents(listItem, tasksIncomplete);
    startCelebration ();
    
    var archiveButton = document.getElementById("archive-button");
    archiveButton.addEventListener("click", archiveItem);
}

//Makes delete button turn to "archive" when task is completed
var changeDeleteArchive = function () {
      var theDelete = document.getElementById("delete-button");
      theDelete.innerText = "Archive";
      theDelete.id = "archive-button";
}


//mark a task as incomplete
var tasksIncomplete = function() {
  console.log("task incomplete..");
    //append the task list item to the #incompleted-tasks ul
    var listItem = this.parentNode;
    changeDeleteBack ();
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, tasksCompleted);
}

//Makes delete button turn back to "delete" when task is completed
var changeDeleteBack = function () {
      var theDelete = document.getElementById("archive-button");
      theDelete.innerText = "Delete";
      theDelete.id = "delete-button";
}


var archiveItem = function () {
  console.log("Archive task..");
    var listItem = this.parentNode;
    
    // var deleteThe = document.getElementById("completed-tasks").getElementById("archive-button");
    // deleteThe.innerText = "Delete";
    // deleteThe.id = "delete-button";


    var checkBox = listItem.querySelector("input[type=checkbox]");
    var editButton = listItem.querySelector("button.edit");
    var deleteButton = listItem.querySelector("button.delete");

    // editButton.remove();
    // deleteButton.remove();

    

    archiveHolder.appendChild(listItem);

}



var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //select its children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
      // bind editTask to edit button
      editButton.onclick = editTask;
      console.log(deleteButton.id);
      if (deleteButton.id == "delete-button")
      //bind deleteTask to delete button
      deleteButton.onclick = deleteTask;

      //bind checkBoxEventHandler to checkbox
      checkBox.onchange = checkBoxEventHandler;

      todoempty ();

}



//Set the click handler to the addTask function

addButton.addEventListener("click", addTask);




//ADDS FILLER TEXT FUNCTION
var todoempty = function() {
  if (incompleteTasksHolder.children.length > 1){
        console.log("not empty");
        noTODO.classList.add("yes-li");
      }
      else {
        console.log("empty");
        noTODO.classList.remove("yes-li");
      }
    }


//ADD Celebration!
var startCelebration = function () {
    var comText = document.getElementById("com-text");
    var delay = 3000;

    comText.classList.add("celebrate")

    setTimeout(function(){
    comText.classList.remove("celebrate")
    }, delay); 



}




//cycle over completedTasksHolder ul list 
for (var i = 0; i < completedTasksHolder.children.length; i++) {
      //bind events to list item's children (taskCompleted)
      bindTaskEvents (completedTasksHolder.children[i], tasksIncomplete);
      
      }

//cycle over completedTasksHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {

    //bind events to list item's children (taskIncomplete)
     bindTaskEvents (incompleteTasksHolder.children[i], tasksCompleted);


}




// The global variables and the 'for' loops are the only things that run when the DOM loads
// The for loops essentially get all the list items ready that are within the completed or incomplete ul's 
// What I mean by 'ready', is that it applies the checkBoxEventHandler equal to tasksIncomplete or tasksCompleted functions
// This is important because when the checkbox is clicked, the bindTaskEvents function now knows which function to execute
// Then, in the function that it executes (tasksIncomplete or tasksComplete) the last line is a call to
// bindTasksEvents again but with the checkBoxEventHandler changed to the opposite (complete or incomplete)
// This function runs.. but nothing happens until the event checkBox.onchange is triggered again




