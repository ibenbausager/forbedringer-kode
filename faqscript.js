// inspiration fra https://www.w3schools.com/howto/howto_js_accordion.asp

var acc = document.getElementsByClassName("spørgsmål");
var i;

for (i = 0; i < acc.length; i++) {
    //i=0 fordi den skal starte med 0 og så tilføje 1 og derefter 1 (dvs bliver til 2) - pga i++. (hhv. nr 1, 2, 3 osv boks)
    acc[i].addEventListener("click", function() { //function burde stå i en linie under
        this.classList.toggle("aktiv");

        var svar = this.nextElementSibling;
        if (svar.style.display === "block") {
            svar.style.display = "none";
        } else {
            svar.style.display = "block";
        }
    });
}