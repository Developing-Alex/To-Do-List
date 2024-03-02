import { displayTasks } from "./index";

export default function createTask (title, description, priority, dueDate) {
    return {
      title, 
      description, 
      priority, 
      dueDate
    }
  };

export function taskHandler(){
  const allTasks = [];

  const getAllTasks = () => allTasks;

  function addTask(newTask){
    getAllTasks().push(newTask)
    console.log(getAllTasks());
    console.log(newTask)
    console.log(getAllTasks().indexOf(newTask))
    return newTask
  }
  
  return {
    addTask,
    getAllTasks
  }
}





