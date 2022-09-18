const inputTask=document.querySelector("#input-task");
const inputDate=document.querySelector("#date")
const taskS=document.querySelector(".todo-list");
const submitButton=document.querySelector("#submit")
const clearButton=document.querySelector("#clear")

submitButton.addEventListener("click",addTask)
clearButton.addEventListener("click",cleaR)
taskS.addEventListener('click',delCheck);
function addTask(){
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    
    const newTask=document.createElement('li');
    newTask.textContent=inputTask.value+" /--"+inputDate.value;
    newTask.classList.add('newItem');
    todoDiv.appendChild(newTask);

    const checkButton=document.createElement('button');
    checkButton.innerHTML='<i class="fas fa-check"></i>'
    checkButton.classList.add("check-btn");
    todoDiv.appendChild(checkButton);

    const delButton=document.createElement('button');
    delButton.innerHTML='<i class="fas fa-trash"></i>'
    delButton.classList.add("del-btn");
    todoDiv.appendChild(delButton);

    taskS.appendChild(todoDiv);
    inputTask.value="";
    inputDate.value="";
}
function delCheck(e){
    const item=e.target;
    if(item.classList[0]==="del-btn"){
        const todo=item.parentElement;
        todo.remove();
    }
    if(item.classList[0]==="check-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("crossed");
    }

}
function cleaR(){
    taskS.textContent=null;
}
