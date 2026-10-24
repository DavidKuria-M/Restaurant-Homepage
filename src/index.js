import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function switchTab(tabFunction){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(tabFunction());
}

document.addEventListener('DOMContentLoaded', () => {
    switchTab(loadHome);

    document.getElementById('home-btn').addEventListener('click',() => switchTab(loadHome));
    document.getElementById('menu-btn').addEventListener('click',() => switchTab(loadMenu));
    document.getElementById('contact-btn').addEventListener('click',() => switchTab(loadContact));
});