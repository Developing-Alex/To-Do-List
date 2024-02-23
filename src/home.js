import './style.css';

function loadHeader(userName){
  const header = document.createElement('header');

  const logo = document.createElement('h1');
  logo.id = 'logo';
  logo.textContent = 'B4.i';

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


function loadSidebar(){
  const sidebar = document.createElement('div');
  sidebar.id = 'sidebar';

  return sidebar;
}

function loadContent(){
  const content = document.createElement('div');
  content.id = 'content';

  return content;
}

function loadContentContainer(){
  const contentContainer = document.createElement('div');
  contentContainer.id = 'content-container';

  const sidebar = loadSidebar();
  const content = loadContent();

  const contentContainerArr = [sidebar, content];
  contentContainerArr.forEach(e => contentContainer.appendChild(e));

  return contentContainer;
}

export { loadHeader, loadContentContainer};