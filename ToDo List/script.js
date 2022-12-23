{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}


const taskContent=document.getElementById('taskList');
const taskInput=document.getElementById('task');
const taskCount=document.getElementById('cnt');
const btn=document.getElementById('task1');

let tasks=[];

btn.addEventListener('click',addToList);

function addToList(e){
    const val=taskInput.value;
    if(val.length==0){
        showNotifications("Task cannot is empty");
    }
    // tasks.push(val);
    //console.log(val);
    const task={
        text:val,
        id:Date.now().toString(),
        done:false
    }
    addTask(task);
    taskInput.value="";
}

document.addEventListener('click',handleInputKeyPress);

function handleInputKeyPress(e){
    const key= e.target;
   // console.log(key);
    if(key.className==='custom-checkbox'){
        const taskId=key.id;
       // console.log(taskId);
        toggleTask(taskId);
        return;
    }
    else if(key.className==='fa fa-trash'){
        const taskId=key.id;
        //console.log(taskId);
        deleteTask(taskId);
        return;
    }
}
// //functions

// 1. add the task from input to the tasklist
// 2. display the tasklist
// 3.delete the task
// 4. count number of tasks
// 5.check uncheck a task.


function addTaskToDom(tasks){
    const li=document.createElement('li');

    li.innerHTML=`
        <input type="checkbox" id="${tasks.id}" ${tasks.done? 'checked':''} class="custom-checkbox"/>
        <label for="${tasks.id}" style="text-weight:bold; font-size:30px; color:white; list-style-type:none">${tasks.text}</label>
        <i  id="${tasks.id}" class="fa fa-trash" style="left:90vw; "></i>
    `;
{/* <button id="${tasks.id}" style="left:90vw;" class="delete"></button> */}
    taskContent.append(li);
}
function renderList(){
    taskContent.innerHTML="";
    for(var i=0;i<tasks.length;i++){
        addTaskToDom(tasks[i]);
    }
};

function deleteTask(taskId){
    const newTasks=tasks.filter(function(task){
        return task.id!==taskId;
    })
    tasks=newTasks;
    renderList();
    showNotifications("Task deleted successfully");
    totalTasks();
}
function addTask(task){
    if(task){
        tasks.push(task);
        renderList();
        showNotifications("Task is added successfully");
        totalTasks();
        return;
    }
    showNotifications("Task cannot be added");
    
}
function toggleTask(taskId){
    var newTask=tasks.filter(function(e){
        return taskId===e.id;
    })
    if(newTask.length>0){
        newTask[0].done=!newTask[0].done;
        showNotifications("Task Toggled successfully");
        renderList();
        return;
    }
    

}
function showNotifications(text){
    alert(text);
}
function totalTasks(){
    var cnt=tasks.length;
    taskCount.innerText=cnt;
    //console.log(cnt);
}