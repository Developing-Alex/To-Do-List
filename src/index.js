import './style.css';
import { loadHeader, loadContentContainer } from './home';

const header = loadHeader('Alex');

const contentContainer = loadContentContainer();

const bodyArr = [header, contentContainer];

bodyArr.forEach(e => document.body.appendChild(e));


