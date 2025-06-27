export default () => {
  const views = `
    <div class="home-container">
      <h1>Welcome to My Restaurant</h1>
      <h2>A Taste of Tradition, A Touch of Modern</h2>
      <p>
        At My-Restaurant, we blend classic flavors with contemporary flair to create a truly unforgettable dining experience.<br><br>
        Whether you’re joining us for a cozy family dinner, a business lunch, or a special celebration, our warm atmosphere and attentive service will make you feel right at home.
      </p>
      <h3>Working Hours</h3>
      <p>
        Monday: Closed<br>
        Tuesday – Thursday: 11:00 AM - 09:00 PM<br>
        Friday – Sunday: 11:00 AM - 10:00 PM
      </p>
      <h3>Location</h3>
      <p>📍123 Main Street, Hometown, USA</p>
    </div>
  `;

  const createDiv = document.createElement("div");
  createDiv.innerHTML = views;
  return createDiv;
};


