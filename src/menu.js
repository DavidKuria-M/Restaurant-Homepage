export default function loadMenu(){

    const content = document.createElement('div');
    content.classList.add('menu-page');

    const hero = document.createElement('div');
    hero.classList.add('menu-hero');
    hero.innerHTML = `
        <div class="menu-hero-text">
            <p class="tagline">OUR MENU</p>
            <h1>Authentic Italian Flavor</h1>
            <p>From handmade pasta to wood-fired classics,our menu celebrates the rich traditions of Italian cuisine,using fresh,high-quality ingredients.</p>
        </div>    
    `;
    content.appendChild(hero);

    const menuCategories = [
        {
            categoryName:"Starters",
            items:[
                {title:"Bruschetta Classica",desc:"Toasted bread with fresh tomatoes,basil,garlic and olive oil.",price: "$8.50",img:"https://images.unsplash.com/photo-1594978583693-8dfdfc93f052?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Caprese Salad",desc:"Fresh mozzarella,ripe tomatoes,extra virgin oliv oil,and basil.",price:"$10.50",img:"https://images.unsplash.com/photo-1623855244697-5d8fbe9c7892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Calamari Fritti",desc:"Crispy fried calamari served with marinara sauce.",price:"$12.50",img:"https://images.unsplash.com/photo-1682264895449-f75b342cbab6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Stuffed Mushrooms",desc:"Mushrooms filled with ricotta,herbs and parmesan.",price:"$11.50",img:"https://images.unsplash.com/photo-1762631383402-43a5f67d62af?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
               
            ]
        },
        {
            categoryName:"Pasta",
            items:[
                {title:"Spaghetti Carbonara",desc:"Classic Roman pasta wit egg,parmesan,pacetta and pepper.",price:"$16.50",img:"https://plus.unsplash.com/premium_photo-1664478291780-0c67f5fb15e6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Penne Arrabiata",desc:"Penne in a spicy tomato sauce with garlic and chili.",price: "$14.50",img:"https://images.unsplash.com/photo-1788599760197-81e54ec9c36a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Fettuccine Alfredo",desc: "Rich and creamy sauce with parmesan and butter.",price:"$15.50",img:"https://images.unsplash.com/photo-1761168941826-7efda859bdae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Lasagna Classica",desc:"Layers of pasta,meat sauce,ricotta and mozzarella.",price:"$17.50",img:"https://plus.unsplash.com/premium_photo-1671559021023-3da68c12aeed?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"}
            ]
        },
        {
            categoryName:"Main Courses",
            items:[
                {title:"Grilled Salmon", desc:"Fresh salmon with seasonal vegetables and lemon butter.",price:"$22.50",img:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Chicken Parmigiana",desc:"Breaded chicken,marinara sauce and melted mozzarella.",price:"19.50",img:"https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Beef Osso Buco",desc:"Slow-braised beef with aromatic herbs and gremolata.",price:"$26.50",img:"https://images.unsplash.com/photo-1571162188392-3b41283bcde6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Spicy Italian Sausage",desc:"Italian sausage with roasted peppers and potatoes.",price:"$18.50",img:"https://images.unsplash.com/photo-1766589152317-2bafe6f2923c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"}
            ]
        },
        {
            categoryName:"Desserts",
            items:[
                {title:"Tiramisu",desc:"Classic Italian dessert with coffe and mascarpone.",price:"$8.50",img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Panna Cotta",desc:"Creamy vanilla panna cotta with seasonal berries.",price:"$7.50",img:"https://images.unsplash.com/photo-1766491765420-2f4f2c4bf49a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Chocolate Lava Cake",desc:"Warm chocolate cake with a molten center",price:"$8.50",img:"https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
                {title:"Cannoli",desc:"Crispy shells filled with sweet ricotta and chocolate chips",price:"$6.50",img:"https://images.unsplash.com/photo-1611292984550-6dd8def2e668?q=80&w=1607&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"}
            ]

        }
    ];

    menuCategories.forEach(meal => {
        const section = document.createElement('div');
        section.classList.add('menu-section');

        const sectionTitle = document.createElement('h2');
        sectionTitle.classList.add('section-title');
        sectionTitle.textContent = meal.categoryName;
        section.appendChild(sectionTitle);

        const grid = document.createElement('div');
        grid.classList.add('menu-grid');

        meal.items.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('menu-card');

            card.innerHTML = `
                <div class = "menu-card-img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="menu-card-info">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <span class="price">${item.price}</span>
                </div>
            `;
            grid.appendChild(card);
        });
        section.appendChild(grid);
        content.appendChild(section);
    });
   

    return content;
}