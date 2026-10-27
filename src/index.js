import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function switchTab(tabFunction, clickedButton){
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    contentDiv.appendChild(tabFunction());

    const allTabBtns = document.querySelectorAll('.tab-btn');
    allTabBtns.forEach(btn => btn.classList.remove('active'));

    if(clickedButton){
        clickedButton.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    switchTab(loadHome,homeBtn);

    homeBtn.addEventListener('click', (e) => switchTab(loadHome,e.target));
    menuBtn.addEventListener('click', (e) => switchTab(loadMenu,e.target));
    contactBtn.addEventListener('click', (e) => switchTab(loadContact,e.target));
});