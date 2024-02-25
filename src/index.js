import './style.css';
import ShowAllTasks from './home';
import ShowDailyTasks from './daily';
import ShowWeeklyTasks from './weekly';

function LoadHomePageContent(){
  const allBtn = document.getElementById('all-btn');
  
  allBtn.onclick = ShowAllTasks;
}

LoadHomePageContent();

function LoadDailyTasks(){
  const dailyBtn = document.getElementById('day-btn');

  dailyBtn.onclick = ShowDailyTasks;
}

LoadDailyTasks();

function LoadWeeklyTasks(){
  const weekBtn = document.getElementById('week-btn');

  weekBtn.onclick = ShowWeeklyTasks;
}

LoadWeeklyTasks();

