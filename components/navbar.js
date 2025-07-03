function createNavbarMy() {
  const container = document.createElement('div');
  container.className = 'main';

  // Mobile header
  const header = document.createElement('header');
  header.className = 'mobile-header';

  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.innerHTML = `<div class="logo-dot"></div><span>Sample Project</span>`;

  const hamburger = document.createElement('div');
  hamburger.className = 'hamburger';
  hamburger.textContent = '☰';

  header.appendChild(logo);
  header.appendChild(hamburger);
  container.appendChild(header);

  // Empty .msg div
  const msg = document.createElement('div');
  msg.className = 'msg';
  container.appendChild(msg);

  // Mobile nav
  const mobileNav = document.createElement('nav');
  mobileNav.className = 'mobile-nav';

  const mobileUl = document.createElement('ul');
  mobileUl.innerHTML = `
    <li class="active">Home</li>
    <li>About</li>
    <li>Our Brands</li>
    <li>What We Do</li>
    <li>Team</li>
    <li>Careers</li>
  `;
  mobileNav.appendChild(mobileUl);
  container.appendChild(mobileNav);

  // Desktop nav
  const desktopNav = document.createElement('nav');
  desktopNav.className = 'desktop-nav';

  const deskLogo = document.createElement('div');
  deskLogo.className = 'logo';
  deskLogo.innerHTML = `<div class="logo-dot"></div><span>Sample Project</span>`;

  const desktopUl = document.createElement('ul');
  desktopUl.innerHTML = `
    <li class="active">Home</li>
    <li>About</li>
    <li>Our Brands</li>
    <li>What We Do</li>
    <li>Team</li>
    <li>Careers</li>
  `;

  desktopNav.append(deskLogo, desktopUl);
  container.appendChild(desktopNav);

  // Text spans (mobile/tab only)
  const textnav = document.createElement('span');
  textnav.className = 'textnav';
  textnav.textContent = 'Where Vision Becomes Venture';

  const textnav2 = document.createElement('div');
  textnav2.className = 'textnav2';
  textnav2.textContent = 'Sample World builds and nurtures independent brands that do more than compete they connect, inspire, and redefine the emotional and cultural fabric of everyday life';

  const btnnav = document.createElement('div');
  btnnav.className = 'btnnav';
  btnnav.textContent = 'Discover Our Vision';

  container.append(textnav, textnav2, btnnav);

  // State: menu toggle
  let open = false;
  hamburger.addEventListener('click', () => {
    open = !open;
    hamburger.textContent = open ? '✖' : '☰';
    if (open) {
      mobileNav.classList.add('show');
    } else {
      mobileNav.classList.remove('show');
    }
  });

  return container;
}
