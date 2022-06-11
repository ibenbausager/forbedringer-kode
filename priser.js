var acc = document.getElementsByClassName("pris"); 
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("aktiv");
    /*Skift mellem at tilføje og fjerne den "aktive" class,
    for at fremhæve den knap, der styrer svar*/ 

    /*Skift mellem at skjule og vise det aktive svar */
    var svar = this.nextElementSibling;
    if (svar.style.display === "block") {
         svar.style.display = "none";
        } else {
            svar.style.display = "block";
    }
  });
}



