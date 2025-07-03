function createPhilosophySection() {
  const section = document.createElement('section');
  section.id = 'philosophy-section';
  section.innerHTML = `
    <div class="illustration-container">
      <img src="./assets/img2.jpg" alt="Philosophy Visual" />
    </div>
    <div class="content-wrapper">
      <span class="tag">The Philosophy</span>
      <div class="content-box">
        <h2 class="title">
          What If Business Could <span class="highlight">Feel Like Art?</span>
        </h2>
        <p class="paragraph">
          At Sample Project, we believe brands can be portals...
        </p>
        <p class="paragraph">
          Every brand begins with a single question: <br />
          <span class="italic-highlight">Does this make the world feel more alive?</span>
        </p>
      </div>
    </div>
  `;
  return section;
}
