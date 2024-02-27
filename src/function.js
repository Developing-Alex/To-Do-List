class Task {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  };
  set title(newTitle){
    this.title = newTitle;
  }
  get title(){
    return this.title;
  }

  set description(newDescription){
    this.description = newDescription;
  }
  get description(){
    return this.description
  }

  set priority(newPriority){
    this.priority = newPriority;
  }
  get priority(){
    return this.priority
  }

  set dueDate(newDueDate){
    this.dueDate = newDueDate
  }
  get dueDate(){
    return this.dueDate
  }
}

function taskHandler(){
  const allTasks = [];
  function addTask(newTask){
    allTasks.push(newTask)
    return newTask
  }
  //const mytask = new Task('adaa','adawe','low','ooiooj');
  //addTask(mytask);
  return allTasks
}

function displayTasks(arr){
  arr.forEach(task => {
    
  });
}

console.log(taskHandler())




