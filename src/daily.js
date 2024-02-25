import './style.css';

export default function ShowDailyTasks(){
  const dailyTaskContainer = document.getElementById('daily-task-container');
  dailyTaskContainer.style.display = 'flex';

  const weeklyTaskContainer = document.getElementById('weekly-task-container');
  weeklyTaskContainer.style.display = 'none';

  const allTasksContainer = document.getElementById('all-task-container');
  allTasksContainer.style.display = 'none';
}