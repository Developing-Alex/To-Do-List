import './style.css';

export default function ShowWeeklyTasks(){
  const dailyTaskContainer = document.getElementById('daily-task-container');
  dailyTaskContainer.style.display = 'none';

  const weeklyTaskContainer = document.getElementById('weekly-task-container');
  weeklyTaskContainer.style.display = 'flex';

  const allTasksContainer = document.getElementById('all-task-container');
  allTasksContainer.style.display = 'none';
}