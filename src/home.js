import './style.css';

function loadHeader(){
  const header = document.createElement('header');

  const logo = document.createElement('h1');
  logo.id = 'logo';
  logo.textContent = 'B4.i';

  const hello = document.createElement('p');
  hello.id = 'hello';
  hello.textContent = 'Hello, UserName';

  const signOutBtn = document.createElement('button');
  signOutBtn.id = 'sign-out-btn';
  signOutBtn.textContent = 'Sign Out';

  const headerArr = [logo, hello, signOutBtn];

  headerArr.forEach(e => header.appendChild(e));
  return header;
}

export { loadHeader };