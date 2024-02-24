import './style.css';
import PencilIcon from './assets/images/pencil-outline.svg';
import DayIcon from './assets/images/calendar-today.svg';
import WeekIcon from './assets/images/calendar-week.svg';
import AllIcon from './assets/images/text-box-multiple-outline.svg';
import AddIcon from './assets/images/plus-circle-outline.svg';

function loadHeader(userName) {
  const header = document.createElement('header');

  const pencilIcon = new Image();
  pencilIcon.src = PencilIcon;
  pencilIcon.id = 'pencil-icon';
  pencilIcon.attributeStyleMap

  const logo = document.createElement('h1');
  logo.id = 'logo';
  logo.textContent = 'Pencil It In';
  logo.prepend(pencilIcon);

  const userContainer = document.createElement('div');
  userContainer.id = 'user-container';

  const hello = document.createElement('p');
  hello.id = 'hello';
  hello.textContent = `Hello, ${userName}!`;

  const signOutBtn = document.createElement('button');
  signOutBtn.id = 'sign-out-btn';
  signOutBtn.textContent = 'Sign Out';

  const userContainerArr = [hello, signOutBtn];
  userContainerArr.forEach(e => userContainer.appendChild(e));

  const headerArr = [logo, userContainer];

  headerArr.forEach(e => header.appendChild(e));
  return header;
}


function loadSidebar() {
  const sidebar = document.createElement('div');
  sidebar.id = 'sidebar';

  function createTimeContainer() {
    const timeContainer = document.createElement('div');
    timeContainer.id = 'time-container';

    const dayIcon = new Image();
    dayIcon.src = DayIcon;
    dayIcon.id = 'day-icon';
    dayIcon.className = 'time-icons';

    const dayBtn = document.createElement('button');
    dayBtn.id = 'day-btn';
    dayBtn.textContent = "Today's Tasks";
    dayBtn.prepend(dayIcon);

    const weekIcon = new Image();
    weekIcon.src = WeekIcon;
    weekIcon.id = 'week-icon';
    weekIcon.className = 'time-icons';

    const weekBtn = document.createElement('button');
    weekBtn.id = 'week-btn';
    weekBtn.textContent = 'My weekly tasks';
    weekBtn.prepend(weekIcon);

    const allIcon = new Image();
    allIcon.src = AllIcon;
    allIcon.id = 'all-icon';
    allIcon.className = 'time-icons';

    const allBtn = document.createElement('button');
    allBtn.id = 'all-btn';
    allBtn.textContent = 'All my tasks';
    allBtn.prepend(allIcon);

    const timeButtons = [dayBtn, weekBtn, allBtn];

    timeButtons.forEach(btn => {
      timeContainer.appendChild(btn);
      btn.className = 'time-btn'
    });

    return timeContainer
  }

  const timeContainer = createTimeContainer();

  sidebar.appendChild(timeContainer)

  return sidebar;
}

function loadContent() {
  const content = document.createElement('div');
  content.id = 'content';

  function createDayTasks() {
    const taskContainer = document.createElement('div');
    taskContainer.id = 'task-container';

    const dailyTaskHeader = document.createElement('h2');
    dailyTaskHeader.id = 'daily-task-header';
    dailyTaskHeader.textContent = "Today's Tasks";

    const addTaskContainer = document.createElement('div');
    addTaskContainer.id = 'add-task-container';

    const addTaskBtn = new Image();
    addTaskBtn.src = AddIcon;
    addTaskBtn.id = 'add-task-btn';
    addTaskBtn.className = 'add-task';

    const addTaskParagraph = document.createElement('p');
    addTaskParagraph.id = 'add-task-paragraph';
    addTaskParagraph.textContent = 'Add Task';
    addTaskParagraph.className = 'add-task';
    addTaskParagraph.prepend(addTaskBtn);

    addTaskContainer.appendChild(addTaskParagraph)

    const taskContainerArr = [dailyTaskHeader, addTaskContainer];
    taskContainerArr.forEach(e => taskContainer.appendChild(e));

    return taskContainer;
  }

  content.appendChild(createDayTasks());

  return content;
}

function loadContentContainer() {
  const contentContainer = document.createElement('div');
  contentContainer.id = 'content-container';

  const sidebar = loadSidebar();
  const content = loadContent();

  const contentContainerArr = [sidebar, content];
  contentContainerArr.forEach(e => contentContainer.appendChild(e));

  return contentContainer;
}

export { loadHeader, loadContentContainer };