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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
