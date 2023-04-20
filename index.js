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