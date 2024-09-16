function toggleLanguage(lang) {
    var english = document.getElementById("english");
    var vietnamese = document.getElementById("vnmese");

    if (lang === "vi") {
      english.style.display = "none";
      vietnamese.style.display = "block";
    } else {
      english.style.display = "block";
      vietnamese.style.display = "none";
    } 
  }

  // Add this in your index.js or at the bottom of the HTML before the closing </body> tag

const projectList = document.querySelector('.project-list');
let isDown = false;
let startX;
let scrollLeft;

projectList.addEventListener('mousedown', (e) => {
  isDown = true;
  projectList.classList.add('active');
  startX = e.pageX - projectList.offsetLeft;
  scrollLeft = projectList.scrollLeft;
});

projectList.addEventListener('mouseleave', () => {
  isDown = false;
  projectList.classList.remove('active');
});

projectList.addEventListener('mouseup', () => {
  isDown = false;
  projectList.classList.remove('active');
});

projectList.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - projectList.offsetLeft;
  const walk = (x - startX) * 3; // scroll-fast
  projectList.scrollLeft = scrollLeft - walk;
});

projectList.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - projectList.offsetLeft;
  scrollLeft = projectList.scrollLeft;
});

projectList.addEventListener('touchend', () => {
  isDown = false;
});

projectList.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - projectList.offsetLeft;
  const walk = (x - startX) * 3;
  projectList.scrollLeft = scrollLeft - walk;
});
