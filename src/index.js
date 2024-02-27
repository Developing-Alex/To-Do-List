import './style.css';

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

function createFormContainer(taskContainer) {

  const formBox = document.createElement('div');
  formBox.id = 'form-box';

  const formTitle = document.createElement('textarea');
  formTitle.id = 'form-title';
  formTitle.name = formTitle.id;
  formTitle.cols = '30';
  formTitle.row = '1';
  formTitle.placeholder = 'Title';

  const formDescription = document.createElement('textarea');
  formDescription.id = 'form-description';
  formDescription.name = formDescription.id;
  formDescription.cols = '30';
  formDescription.row = '3';
  formDescription.placeholder = 'Description';

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
  highInput.value = highInput.id;

  const highLabel = document.createElement('label');
  highLabel.textContent = 'High';
  highLabel.setAttribute('for', 'high');

  const highPriorityArr = [highInput, highLabel];
  highPriorityArr.forEach(e => highPriority.appendChild(e));

  const mediumPriority = document.createElement('li');
  mediumPriority.className = 'priorities';

  const mediumInput = document.createElement('input');
  mediumInput.type = 'radio';
  mediumInput.name = 'priority';
  mediumInput.id = 'medium';
  mediumInput.className = 'priority-radio';
  mediumInput.value = mediumInput.id;

  const mediumLabel = document.createElement('label');
  mediumLabel.textContent = 'Medium';
  mediumLabel.setAttribute('for', 'medium');

  const mediumPriorityArr = [mediumInput, mediumLabel];
  mediumPriorityArr.forEach(e => mediumPriority.appendChild(e));

  const lowPriority = document.createElement('li');
  lowPriority.className = 'priorities';

  const lowInput = document.createElement('input');
  lowInput.type = 'radio';
  lowInput.name = 'priority';
  lowInput.id = 'low';
  lowInput.className = 'priority-radio';
  lowInput.value = lowInput.id;

  const lowLabel = document.createElement('label');
  lowLabel.textContent = 'Low'
  lowLabel.setAttribute('for', 'low');

  const lowPriorityArr = [lowInput, lowLabel];
  lowPriorityArr.forEach(e => lowPriority.appendChild(e));

  const priorityContainerArr = [highPriority, mediumPriority, lowPriority];
  priorityContainerArr.forEach(e => priorityContainer.appendChild(e));

  const dueDateBtn = document.createElement("button");
  dueDateBtn.id = 'due-date-btn';
  dueDateBtn.textContent = 'Due Date';

  const formBoxArr = [formTitle, formDescription, priorityHeader, priorityContainer, dueDateBtn];
  formBoxArr.forEach(e => formBox.appendChild(e));

  taskContainer.prepend(formBox);

  return taskContainer;
}

const addTaskParagraph = document.querySelectorAll('.add-task-paragraph');

addTaskParagraph.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.parentElement.id.charAt(btn.parentElement.id.length - 1) === btn.id.charAt(btn.id.length - 1))
      createFormContainer(btn.parentElement)
  })
})



//export { LoadDailyTasks, LoadAllTasks, LoadWeeklyTasks }
