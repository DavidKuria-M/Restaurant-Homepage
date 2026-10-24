export default function loadContact(){

    const content = document.createElement('div');
    content.classList.add('contact-content');

    const title = document.createElement('h2');
    title.textContent = "Contact Us";

    const info = document.createElement('p');
    info.textContent = "Phone: +254 (0) 700 000 000 | Email:reservations@senso.com";

    content.appendChild(title);
    content.appendChild(info);

    return content;
}