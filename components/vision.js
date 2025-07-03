function createVisionSection() {
  const section = document.createElement('section');
  section.className = 'vision-section hello';
  section.style.backgroundImage = "url('./assets/gun.jpg')";
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  section.style.backgroundRepeat = 'no-repeat';
  section.style.height = '470px';
  section.style.width = '100%';

  section.innerHTML = `
    <div class="vision-label">The Vision</div>
    <div class="vision-container">
      <div class="vision-image"></div>
      <div class="vision-content">
        <h2 class="vision-title">
          Our Vision Is Not to Own the Future. It’s to Inspire It
        </h2>
        <p class="vision-text">Only deep belief in ideas that matter...</p>
        <p class="vision-text">In a world driven by urgency, we build with intention</p>
        <button class="vision-button">Learn More About Us</button>
      </div>
      <div class="vision-image"></div>
    </div>
  `;
  return section;
}
