import './style.css';

export default function ShowAllTasks(){
  const dailyTaskContainer = document.getElementById('daily-task-container');
  dailyTaskContainer.style.display = 'none';

  const weeklyTaskContainer = document.getElementById('weekly-task-container');
  weeklyTaskContainer.style.display = 'none';

  const allTasksContainer = document.getElementById('all-task-container');
  allTasksContainer.style.display = 'flex';
}

function LoadHomePageContent(){
  const allBtn = document.getElementById('all-btn');
  
  allBtn.onclick = ShowAllTasks;
}

LoadHomePageContent();

export default function ShowDailyTasks(){
  const dailyTaskContainer = document.getElementById('daily-task-container');
  dailyTaskContainer.style.display = 'flex';

  const weeklyTaskContainer = document.getElementById('weekly-task-container');
  weeklyTaskContainer.style.display = 'none';

  const allTasksContainer = document.getElementById('all-task-container');
  allTasksContainer.style.display = 'none';
}

function LoadDailyTasks(){
  const dailyBtn = document.getElementById('day-btn');

  dailyBtn.onclick = ShowDailyTasks;
}

LoadDailyTasks();

export default function ShowWeeklyTasks(){
  const dailyTaskContainer = document.getElementById('daily-task-container');
  dailyTaskContainer.style.display = 'none';

  const weeklyTaskContainer = document.getElementById('weekly-task-container');
  weeklyTaskContainer.style.display = 'flex';

  const allTasksContainer = document.getElementById('all-task-container');
  allTasksContainer.style.display = 'none';
}

function LoadWeeklyTasks(){
  const weekBtn = document.getElementById('week-btn');

  weekBtn.onclick = ShowWeeklyTasks;
}

LoadWeeklyTasks();

