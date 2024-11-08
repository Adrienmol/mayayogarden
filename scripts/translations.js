const translations = {
    "es": {
        "title": "Bienvenidos",
        "description" : "Descripcion"
    },

    "en": {
        "title": "Welcome to Mayayo Garden",
        "description": "This is a trial for the description"
    }
};

console.log(translations["en"]["title"]);


// Código para el slider de idioma
const languageSwitch = document.getElementById('languageSwitch');
let isEnglish = false;

languageSwitch.addEventListener('click', function() {
    isEnglish = !isEnglish;
    this.classList.toggle('active');
});

