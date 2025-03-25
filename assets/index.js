function addTask(){
    const taskInput=document.getElementById(`task-input`);
    const taskText=taskInput.value;
   
    const taskList=document.getElementById(`task-list`);
const newTask=document.createElement(`li`);
newTask.textContent=taskText;
newTask.addEventListener(`click`,function(){
    newTask.classList.toggle(`completed`)
});

taskList.append(newTask);
taskInput.value="";
}