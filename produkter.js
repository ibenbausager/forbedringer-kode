function bestilling1() {
    var email = 'laer9384@edu.zealand.dk';
    var subject = 'Bestilling - CBD Olie';
    var emailBody = "Hej.%0D%0A" +
        "Jeg ønsker at bestille følgende vare: CBD Olie%0D%0A" +
        "Antal:%0D%0A" +
        "Kontakt mig via (tlf el. email):%0D%0A" +
        "Hilsen:%0D%0A";

    // Får browseren til at vise native mail applikation på computeren
    // + email + betyder at du lægger email til strengen
    // Det giver "mailto:laer9384@edu.zealand.dk"
    // Det er en måde hvorpå man kan tilføje værdier til teksten
    // %0D%0A laver linieskift i mailens tekst
    document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
};

// inspiration fra https://stackoverflow.com/questions/13231125/automatically-open-default-email-client-and-pre-populate-content

function bestilling2() {
    var email = 'laer9384@edu.zealand.dk';
    var subject = 'Bestilling - Collagile Dog';
    var emailBody = "Hej. %0D%0A" +
        "Jeg ønsker at bestille følgende vare: Collagile Dog%0D%0A" +
        "Antal:%0D%0A" +
        "Kontakt mig via (tlf el. email):%0D%0A" +
        "Hilsen:%0D%0A";
    document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
};