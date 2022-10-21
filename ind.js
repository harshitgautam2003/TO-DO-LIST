const inputTask=document.querySelector("#input-task");
const inputDate=document.querySelector("#date")
const taskS=document.querySelector(".todo-list");
const submitButton=document.querySelector("#submit")
const clearButton=document.querySelector("#clear")

document.addEventListener("DOMContentLoaded",getTasks)
submitButton.addEventListener("click",addTask)
clearButton.addEventListener("click",cleaR)
taskS.addEventListener('click',delCheck);
function addTask(){
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    
    const newTask=document.createElement('li');
    newTask.textContent=inputTask.value+"---"+inputDate.value;
    newTask.classList.add('newItem');
    todoDiv.appendChild(newTask);

    saveLocal(inputTask.value);

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
        clearLocalstorage(todo);
    }
    if(item.classList[0]==="check-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("crossed");
    }

}
function cleaR(){
    taskS.textContent=null;
}

function saveLocal(todo){
   let todoList;
   if(localStorage.getItem("todoList")===null){
        todoList=[];
   }
   else{
    todoList=JSON.parse(localStorage.getItem("todoList"));
   }
   todoList.push(todo);
   localStorage.setItem("todoList",JSON.stringify(todoList));
}
function getTasks(){
    let todoList;
   if(localStorage.getItem("todoList")===null){
        todoList=[];
   }
   else{
    todoList=JSON.parse(localStorage.getItem("todoList"));
   }
   todoList.forEach(function (todo) {
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    
    const newTask=document.createElement('li');
    newTask.textContent=todo;
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
   });
}
function clearLocalstorage(todo){
    let todoList;
    if(localStorage.getItem("todoList")===null){
        todoList=[];
   }
   else{
    todoList=JSON.parse(localStorage.getItem("todoList"));
   }
   const todoIndex=todo.children[0].innerText;
   todoList.splice(todoList.indexOf(todoIndex),1);
   localStorage.setItem("todoList",JSON.stringify(todoList));
}