// document.addEventListener('DOMContentLoaded', () => {
//   const app = document.getElementById('app');

//   app.append(
//     createNavbar(),
//     createSecondPage(),
//     createBrandsSection(), // You didn't include this, so use placeholder
//     createPhilosophySection(),
//     createVisionSection(),
//     createFooter()
//   );
// });
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.appendChild(createNavbarMy());
});
