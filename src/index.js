import './style.css';
import createTask from './function';
import { taskHandler } from './function';

const allBtn = document.getElementById('all-btn');
const dailyBtn = document.getElementById('day-btn');
const weekBtn = document.getElementById('week-btn');

function ShowAllTasks() {
  const dailyTaskContainer = document.getElementById('daily-task-container');
  dailyTaskContainer.style.display = 'none';

  const weeklyTaskContainer = document.getElementById('weekly-task-container');
  weeklyTaskContainer.style.display = 'none';

  const allTasksContainer = document.getElementById('all-task-container');
  allTasksContainer.style.display = 'flex';

  dailyBtn.classList.remove('active');
  weekBtn.classList.remove('active');
  allBtn.classList.add('active');
}
allBtn.onclick = ShowAllTasks;


function ShowDailyTasks() {
  const dailyTaskContainer = document.getElementById('daily-task-container');
  dailyTaskContainer.style.display = 'flex';

  const weeklyTaskContainer = document.getElementById('weekly-task-container');
  weeklyTaskContainer.style.display = 'none';

  const allTasksContainer = document.getElementById('all-task-container');
  allTasksContainer.style.display = 'none';
  dailyBtn.classList.add('active');
  weekBtn.classList.remove('active');
  allBtn.classList.remove('active');
}
dailyBtn.onclick = ShowDailyTasks;

function ShowWeeklyTasks() {
  const dailyTaskContainer = document.getElementById('daily-task-container');
  dailyTaskContainer.style.display = 'none';

  const weeklyTaskContainer = document.getElementById('weekly-task-container');
  weeklyTaskContainer.style.display = 'flex';

  const allTasksContainer = document.getElementById('all-task-container');
  allTasksContainer.style.display = 'none';
  dailyBtn.classList.remove('active');
  weekBtn.classList.add('active');
  allBtn.classList.remove('active');
}
weekBtn.onclick = ShowWeeklyTasks;

const addTaskContainer = document.querySelectorAll('.add-task-container');
const addTaskParagraph = document.querySelectorAll('.add-task-paragraph');

function createFormContainer(taskContainer) {
  const formBox = document.createElement('form');
  formBox.name = `form-box`;
  formBox.id = formBox.name;  
  formBox.method = 'post';
  formBox.action = '';

  const formTitle = document.createElement('textarea');
  formTitle.id= 'form-title';
  formTitle.name = formTitle.id;
  formTitle.cols = '30';
  formTitle.row = '1';
  formTitle.placeholder = 'Title';
  formTitle.required = true;
  formTitle.value = '';

  const formDescription = document.createElement('textarea');
  formDescription.id = 'form-description';
  formDescription.name = formDescription.id;
  formDescription.cols = '30';
  formDescription.row = '3';
  formDescription.placeholder = 'Description';
  formDescription.required = true;

  const priorityHeader = document.createElement('h4');
  priorityHeader.id = 'priority-header';
  priorityHeader.textContent = 'Priority';

  const priorityContainer = document.createElement('div');
  priorityContainer.id = 'priority-container';

  const highPriority = document.createElement('li');
  highPriority.className = 'priorities';

  const highInput = document.createElement('input');
  highInput.type = 'radio';
  highInput.name = 'priority';
  highInput.id = 'high';
  highInput.className = 'priority-radio';

  const highLabel = document.createElement('label');
  highLabel.textContent = 'High';
  highLabel.setAttribute('for', 'high');
  highInput.value = highLabel.textContent;

  const highPriorityArr = [highInput, highLabel];
  highPriorityArr.forEach(e => highPriority.appendChild(e));

  const mediumPriority = document.createElement('li');
  mediumPriority.className = 'priorities';

  const mediumInput = document.createElement('input');
  mediumInput.type = 'radio';
  mediumInput.name = 'priority';
  mediumInput.id = 'medium';
  mediumInput.className = 'priority-radio';

  const mediumLabel = document.createElement('label');
  mediumLabel.textContent = 'Medium';
  mediumLabel.setAttribute('for', 'medium');
  mediumInput.value = mediumLabel.textContent;

  const mediumPriorityArr = [mediumInput, mediumLabel];
  mediumPriorityArr.forEach(e => mediumPriority.appendChild(e));

  const lowPriority = document.createElement('li');
  lowPriority.className = 'priorities';

  const lowInput = document.createElement('input');
  lowInput.type = 'radio';
  lowInput.name = 'priority';
  lowInput.id = 'low';
  lowInput.className = 'priority-radio';

  const lowLabel = document.createElement('label');
  lowLabel.textContent = 'Low'
  lowLabel.setAttribute('for', 'low');
  lowInput.value = lowLabel.textContent;

  const lowPriorityArr = [lowInput, lowLabel];
  lowPriorityArr.forEach(e => lowPriority.appendChild(e));

  const priorityContainerArr = [highPriority, mediumPriority, lowPriority];
  priorityContainerArr.forEach(e => priorityContainer.appendChild(e));

  const dueDateBtn = document.createElement("button");
  dueDateBtn.id = 'due-date-btn';
  dueDateBtn.className = 'form-btn';
  dueDateBtn.textContent = 'Add Due Date';

  const dateInput = document.createElement('input');
  dateInput.id = 'date-input';
  dateInput.name = dateInput.id;
  dateInput.type = 'date';

  dueDateBtn.addEventListener('click', () => {
    formBox.replaceChild(dateInput, dueDateBtn)
  })

  const submitTaskBtn = document.createElement('input');
  submitTaskBtn.id = 'submit';
  submitTaskBtn.className = 'form-btn';
  submitTaskBtn.type = 'submit';

  const formBoxArr = [formTitle, formDescription, priorityHeader, priorityContainer, dueDateBtn, submitTaskBtn];
  formBoxArr.forEach(e => formBox.appendChild(e));

  taskContainer.appendChild(formBox);

  submitTaskBtn.addEventListener('click', function(event){
    event.preventDefault();

    const taskTitle = formTitle.value;
    const taskDescription = formDescription.value;
    let taskPriority = document.querySelector('input[name="priority"]:checked').value
    const taskDueDate = dateInput.value;

    submitTaskBtn.parentElement.style.display = 'none';
    addTaskParagraph.forEach(btn => btn.style.display = 'flex')
    taskContainer.prepend(displayTasks(createTask(taskTitle, taskDescription,taskPriority,taskDueDate)));

    console.log(taskPriority)

    formTitle.value = '';
    formDescription.value = '';
    taskPriority.value = '';
    dateInput.value = '';
  })

  return taskContainer;
}

addTaskParagraph.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.parentElement.id.charAt(btn.parentElement.id.length - 1) === btn.id.charAt(btn.id.length - 1))
      createFormContainer(btn.parentElement);
      btn.style.display = 'none';
  })
})


function displayTasks(obj){

  const taskCard = document.createElement('div');
  taskCard.id = `task-card`
  taskCard.className = 'task-cards';

  const taskTitle = document.createElement('p');
  taskTitle.id = `task-title`;
  taskTitle.className = 'task-titles';
  
  const taskDescription = document.createElement('p');
  taskDescription.id = `task-description`;
  taskDescription.className = 'task-descriptions';

  const taskPriority = document.createElement('p');
  taskPriority.id = `task-priority`;
  taskPriority.className = 'task-priorities';

  const taskDueDate = document.createElement('p');
  taskDueDate.id = `task-due-date`;
  taskDueDate.className = 'task-due-dates';

  const taskCardArr = [taskTitle, taskDescription, taskPriority, taskDueDate];
  taskCardArr.forEach(taskCardEl => {
    taskCard.appendChild(taskCardEl);
  });

  taskTitle.textContent = `Task: ${obj.title}`;
  taskDescription.textContent = `Details: ${obj.description}`;
  taskPriority.textContent = `Priority: ${obj.priority}`;
  taskDueDate.textContent = `Due date: ${obj.dueDate}`;

 return taskCard
};

