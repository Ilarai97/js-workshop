var tasks = []

function addTask(){
    var taskInput = document.getElementById('todoInput')
    var taskValue = taskInput.value 

    if(taskValue.trim() !== ""){
        taskInput.push ({
            Text : taskValue,
            completed : false
        })

        taskInput.value = " "
        updateTodoList()
    }
}

function updateTodoList(){
    const todoList = document.getElementById('todoList')
    todoList.innerHTML=" "

    tasks.forEach((task)=>{
        var listItem = document.createElement('li')
        listItem.textContent= task.text
        listItem.className= task.completed ? 'completed' : ""
        listItem.onclick = function (){
            toogleCompleted(task)
        }
        todoList.appendChild(listItem)
    })
    updateAggregrate()
}

function toogleCompleted(task){
    task.completed = !task.completed
    updateTodoList()
}

function updateAggregrate(){
    var totalTasks = document.getElementById ( ' totalTasks')
    var completedTasks = document.getElementById('completedTasks')
    var total = tasks.length
    var completed = tasks.reduce((acc , task)=>{
        return task.completed ? acc + 1 : acc
    },0)

    totalTasks.textContent = total
    completedTasks.textContent=completed
}

function filterTasks(){
    var searchInput = document.getElementById('searchInput')
    var searchInput = searchInput.value.toLowerCase()

var filterTasks= tasks.filter((task)=> {
    return task.text.toLowerCase().includes(searchValue)
})
updateTodoListWithFilteredTasks(filterTasks)
}

function updateTodoListWithFilteredTasks(filterTasks){
    var todoList = document.getElementById('todoList')
    todoList.innerHTML=" "

    filterTasks.forEach((task)=>{
        var listItem = document.createElement('li')
        listItem.textContent=task.text
        listItem.className=task.completed ? 'completed' : " "
        listItem.onclick=function(){
            toogleCompleted(task)
        }
        todoList.appendChild(listItem)
    })
    updateAggregrate()
}
