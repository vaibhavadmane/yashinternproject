function createSecondPage() {
  const section = document.createElement('section');
  section.id = 'philosophy-section';
  section.innerHTML = `
    <div class="content-wrapper">
      <div class="content-box">
        <span class="tag">What We Are</span>
        <h2 class="title">
          Not a Product. Not a Platform. <span class="highlight">A Philosophy</span>
        </h2>
        <p class="paragraph">
          Sample Project is the invisible architecture behind transformative brand cultivating ideas...
        </p>
      </div>
    </div>
    <div class="illustration-container">
      <img src="./assets/img1.jpg" alt="Illustration" />
    </div>
  `;
  return section;
}
