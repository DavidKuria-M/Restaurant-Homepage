export default function loadMenu(){

    const content = document.createElement('div');
    content.classList.add('menu-content');

    const title = document.createElement('h2');
    title.textContent = "Our Menu";

    const menuList = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.textContent = "Truffle & Wild Mushroom Risotto - $32";
    const item2 = document.createElement('li');
    item2.textContent = "Handmade Tagliolini with Wagyu Bolognese - $28";

    menuList.appendChild(item1);
    menuList.appendChild(item2);
    content.appendChild(title);
    content.appendChild(menuList);

    return content;
}