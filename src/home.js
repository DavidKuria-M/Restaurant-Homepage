export default function loadHome(){

    const content = document.createElement('div');
    content.classList.add('home-content');

    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section');

    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');

    const tagline = document.createElement('p');
    tagline.classList.add('tagline');
    tagline.textContent = "MODERN ITALIAN CUISINE";

    const headline = document.createElement('h1')
    headline.textContent = "Savor Life's Finest Moments:";

  
    const description = document.createElement('p');
    description.textContent = "At Senso, we blend traditional Italian flavors with modern culinary artistry.Every dish is crafted with the finest ingredients for an unforgettable dinning experience.";

    const heroButtons = document.createElement('div');
    heroButtons.classList.add('hero-buttons');

    const orderBtn = document.createElement('button');
    orderBtn.classList.add('action-btn');
    orderBtn.textContent = "VIEW MENU";

    const storyBtn = document.createElement('button');
    storyBtn.classList.add('story-btn');
    storyBtn.innerHTML = "WATCH OUR STORY <span>&#9654;</span>";

    heroButtons.appendChild(orderBtn);
    heroButtons.appendChild(storyBtn);

    heroText.appendChild(tagline);
    heroText.appendChild(headline);
    heroText.appendChild(description);
    heroText.appendChild(heroButtons);

    const heroImageContainer = document.createElement('div');
    heroImageContainer.classList.add('hero-image');

    const heroImg = document.createElement('img');
    heroImg.src = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80";
    heroImg.alt="Gourmet Dish";
    heroImageContainer.appendChild(heroImg);

    heroSection.appendChild(heroText);
    heroSection.appendChild(heroImageContainer);

    const featuresGrid = document.createElement('div');
    featuresGrid.classList.add('features-grid');

    const features = [
        {title: "LOCALLY SOURCED",text:"We use the freshest local ingredients in every dish. "},
        {title:"CULINARY ARTISTRY",text:"Our chefs craft each plate with passion and precision."},
        {title:"FINEST SELECTIONS",text:"An exceptional selection of wines to complement your meal."}
    ];

    features.forEach(f => {
        const card = document.createElement('div');
        card.classList.add('feature-card');

        const h3 = document.createElement('h3');
        h3.textContent = f.title;

        const p = document.createElement('p');
        p.textContent = f.text;

        card.appendChild(h3);
        card.appendChild(p);
        featuresGrid.appendChild(card);
    });

    content.appendChild(heroSection);
    content.appendChild(featuresGrid);

    return content;
}