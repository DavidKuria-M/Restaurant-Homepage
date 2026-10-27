import locationIcon from './resources/location.png';
import callIcon from './resources/call.png';
import mailIcon from './resources/mail.png';
import scheduleIcon from './resources/schedule.png';



export default function loadContact(){

    const content = document.createElement('div');
    content.classList.add('content-page');

    const hero = document.createElement('div');
    hero.classList.add('contact-hero');

    hero.innerHTML = `
        <div class="hero-content">
            <p class="tagline">CONTACT US</p>
            <h1>We'd Love to Hear <br>From You</h1>
            <p>Have a question,reservation request, or you want to say hello? <br> Get in touch with us - we're here to help and look forward to hearing from you.</p>
            <div class="menu-gold-line"></div->
        </div>
    `;
    content.appendChild(hero);

    const infoMapSection = document.createElement('div');
    infoMapSection.classList.add('info-map-section');

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('contact-info-list');
    infoDiv.innerHTML = `
        <div class="info-item">
            <img class="info-icon" src="${locationIcon}" alt="Location">
            <div>
                <h3>Our Location</h3>
                <p>123 via Roma <br>Nairobi, Kenya</p>
            </div>
        </div>
        <div class="info-item">
            <img class="info-icon" src="${callIcon}" alt="Call">
            <div>
                <h3>Phone</h3>
                <p>+254 700 000 000</p>
            </div>
        </div>
        <div class="info-item">
            <img class="info-icon" src="${mailIcon}" alt="Mail">
            <div>
                <h3>Email</h3>
                <p>senso@enquiries.com</p>
            </div>
        </div>
        <div class="info-item">
            <img class="info-icon" src="${scheduleIcon}" alt="Clock">
            <div>
                <h3>Opening Hours</h3>
                <p>Mon - Sun: 6:00 AM - 12:00 AM</p>
            </div>
        </div>
    `;

    //map look if we can use the map api//will come back to this

    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map-container');
    mapDiv.innerHTML = `
        <iframe
            src="https://maps.google.com/maps?q=Global+Trade+Centre+Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed" allowfullscreen="" loading="lazy" refferrerpolicy="no-referrer-when-downgrade">
        </iframe>
    `;

    infoMapSection.appendChild(infoDiv);
    infoMapSection.appendChild(mapDiv);
    content.appendChild(infoMapSection);

    const formCard = document.createElement('div');
    formCard.classList.add('contact-form-card');
    formCard.innerHTML = `
        <p class="tagline">SEND US A MESSAGE</p>
        <h2>We'd Be Happy to <br>Hear From You</h2>
        <form class="contact-form" onsubmit="event.preventDefault();">
            <div class="form-row">
                <div class="form-group">
                    <label>Name *</label>
                    <input type="text" id="Name" placeholder="Your name" required>
                </div>
                <div class="form-group">
                    <label>Email *</label>
                    <input type="email" id="Email" placeholder="your@email.com" required>
                </div>
            </div>

            <div class="form-group">
                <label>Message *</label>
                <textarea id="Message" placeholder="Your message here..." rows="5" required></textarea>
            </div>
            <button type="submit" class="action-btn">Send Message</button>
        </form>
    `;

    content.appendChild(formCard);

    const footBanner = document.createElement('div');
    footBanner.classList.add('footer-banner');
    footBanner.innerHTML = `
        <div class="foot-banner-content">
            <p>Good food brings people together.</p>
            <div class="menu-gold-line center-line"></div>
        </div
    `;
    content.appendChild(footBanner);

    const siteFooter = document.createElement('footer');
    siteFooter.classList.add('site-footer');
    siteFooter.innerHTML = `
        <div class="footer-left">
            <h3>SENSO</h3>
            <p>AUTHENTIC ITALIAN CUISINE</p>
        </div>

        <div class="footer-copy">
            <p>&#169; 2026 SENSO.All rights reserved.</p>
        </div>
    `;

    content.appendChild(siteFooter);

    return content;
}