class Task {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

function taskHandler(){
  const allTasks = [];
  function addTask(newTask){
    allTasks.push(newTask)
    return newTask
  }
  addTask(new Task('adaa','adawe','low','ooiooj'))
  return {allTasks}
}

console.log(taskHandler().title)




