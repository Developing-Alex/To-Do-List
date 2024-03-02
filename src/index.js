import './style.css';
import createTask from './function';
import { taskHandler } from './function';
import CancelButton from './assets/images/plus-circle-outline.svg';

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

  const formTitleContainer = document.createElement('div');
  formTitleContainer.id = 'form-title-container'

  const formTitle = document.createElement('textarea');
  formTitle.id = 'form-title';
  formTitle.name = formTitle.id;
  formTitle.cols = '30';
  formTitle.row = '1';
  formTitle.placeholder = 'Title';
  formTitle.required = true;
  formTitle.value = '';

  const cancelButton = new Image();
  cancelButton.src = CancelButton;
  cancelButton.id = 'form-cancel-btn';

  const formTitleContainerArr = [formTitle, cancelButton];
  formTitleContainerArr.forEach(el => formTitleContainer.appendChild(el))

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

  const formBoxArr = [formTitleContainer, formDescription, priorityHeader, priorityContainer, dueDateBtn, submitTaskBtn];
  formBoxArr.forEach(e => formBox.appendChild(e));

  taskContainer.appendChild(formBox);

  function clearFormBox() {
    formTitle.value = '';
    formDescription.value = '';
    var ele = document.getElementsByName("priority");
    for (let i = 0; i < ele.length; i++)
      ele[i].checked = false;
    dateInput.value = '';
  }

  function fillTaskCard() {
    const taskTitle = formTitle.value;
    const taskDescription = formDescription.value;
    let taskPriority = document.querySelector('input[name="priority"]:checked').value
    const taskDueDate = dateInput.value;

    formBox.style.display = 'none';
    addTaskParagraph.forEach(btn => btn.style.display = 'flex')

    taskContainer.prepend(displayTasks(createTask(taskTitle, taskDescription, taskPriority, taskDueDate)));

    console.log(taskPriority)
    clearFormBox();
  }

  cancelButton.addEventListener('click', () => {
    clearFormBox();
    formBox.style.display = 'none';
    addTaskParagraph.forEach(btn => btn.style.display = 'flex')
  })

  submitTaskBtn.addEventListener('click', event => {
    event.preventDefault();
    fillTaskCard();
  });

  return taskContainer;
}

addTaskParagraph.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.parentElement.id.charAt(btn.parentElement.id.length - 1) === btn.id.charAt(btn.id.length - 1))
      createFormContainer(btn.parentElement);
    btn.style.display = 'none';
  })
})


export function displayTasks(obj) {

  const taskCard = document.createElement('div');
  taskCard.id = `task-card`
  taskCard.className = 'task-cards';

  const taskTitleContainer = document.createElement('div');
  taskTitleContainer.className = 'task-title-containers';

  const taskTitleHeading = document.createElement('h4');
  taskTitleHeading.className = 'task-title-headings';

  const taskTitle = document.createElement('p');
  taskTitle.className = 'task-titles';

  const taskTitleContainerArr = [taskTitleHeading, taskTitle];
  taskTitleContainerArr.forEach(taskTitleEl => taskTitleContainer.appendChild(taskTitleEl));

  const taskDescriptionContainer = document.createElement('div');
  taskDescriptionContainer.className = 'task-description-containers';

  const taskDescriptionHeading = document.createElement('h4');
  taskDescriptionHeading.className = 'task-description-headings';

  const taskDescription = document.createElement('p');
  taskDescription.className = 'task-descriptions';

  const taskDescriptionContainerArr = [taskDescriptionHeading, taskDescription];
  taskDescriptionContainerArr.forEach(taskDescriptionEl => taskDescriptionContainer.appendChild(taskDescriptionEl));

  const taskPriorityContainer = document.createElement('div');
  taskPriorityContainer.className = 'task-priority-containers';

  const taskPriorityHeading = document.createElement('h4');
  taskPriorityHeading.className = 'task-priority-headings';

  const taskPriority = document.createElement('p');
  taskPriority.className = 'task-priorities';

  const taskPriorityContainerArr = [taskPriorityHeading, taskPriority];
  taskPriorityContainerArr.forEach(taskPriorityEl => taskPriorityContainer.appendChild(taskPriorityEl));

  const taskDueDateContainer = document.createElement('div');
  taskDueDateContainer.className = 'task-due-date-containers';

  const taskDueDateHeading = document.createElement('h4');
  taskDueDateHeading.className = 'task-due-date-headings';

  const taskDueDate = document.createElement('p');
  taskDueDate.className = 'task-due-dates';

  const taskDueDateContainerArr = [taskDueDateHeading, taskDueDate];
  taskDueDateContainerArr.forEach(taskDueDateEl => taskDueDateContainer.appendChild(taskDueDateEl));

  const taskCardArr = [taskTitleContainer, taskDescriptionContainer, taskPriorityContainer, taskDueDateContainer];
  taskCardArr.forEach(taskCardEl => {
    taskCard.appendChild(taskCardEl);
  });

  taskTitleHeading.textContent = `Task:`;
  taskTitle.textContent = obj.title;

  taskDescriptionHeading.textContent = `Details:`;
  taskDescription.textContent = obj.description;

  taskPriorityHeading.textContent = `Priority:`;
  taskPriority.textContent = obj.priority;

  taskDueDateHeading.textContent = `Due date:`;
  taskDueDate.textContent = obj.dueDate;


  return taskCard
};

