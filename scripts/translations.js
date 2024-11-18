const translations = {
    "es": {
        "nav-home": "Inicio",
        "nav-services": "Servicios",
        "nav-contact": "Contacto",
        "hero-title": "Bienvenido a Mayayo Garden",
        "hero-explore" : "Explora nuestros servicios",
        "hero-contact" : "Contáctanos",
        "about-us-header" : "¿Quiénes somos?",

        "about-us-p1": `
            Somos es una empresa de jardinería familiar fundada hace más de 20 años por dos hermanos apasionados por el diseño y el cuidado de espacios verdes. Con un firme compromiso con la calidad y la satisfacción de nuestros clientes, hemos tenido el privilegio de colaborar con cientos de personas y llevar a cabo miles de proyectos, desde jardines residenciales hasta amplios espacios comerciales.
        `,

        "about-us-p2" : `
            A lo largo de nuestra trayectoria, hemos construido una reputación basada en la profesionalidad, dedicación y respeto por el medio ambiente. Nos enorgullecemos de nuestro equipo de expertos, quienes trabajan con esmero para transformar cada rincón en un lugar verde, fresco y lleno de vida. Cada uno de nuestros servicios — desde el diseño y construcción de jardines hasta el mantenimiento de piscinas y la venta de una amplia variedad de plantas — está pensado para satisfacer las necesidades de nuestros clientes, garantizando soluciones adaptadas y duraderas.
        `,

        "about-us-p3" : `
            Creemos que un espacio verde bien cuidado no solo embellece su entorno, sino que también aporta paz y bienestar. En Mayayo Garden, cada proyecto es una oportunidad para crear belleza y dejar una huella positiva en la naturaleza.
        `,

        "services-header" : "Nuestros Servicios",
        "services-garden-header": "Jardines",
        "services-garden-description": "Diseño y construcción de hermosos entornos verdes.",
        "services-pool-header" : "Piscinas",
        "services-pool-description" : "Mantenimientos y todo tipo de cuidados para tu piscina.",
        "services-plant-header" : "Plantas",
        "services-plant-description": "Contamos con una gran variedad de plantas en nuestro invernadero.",

        "find-us-header" : "Encuéntranos"
    },

    "en": {
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-contact": "Contact",
        "hero-title": "Welcome to Mayayo Garden",
        "hero-explore" : "Check our services",
        "hero-contact" : "Contact us",
        "about-us-header" : "About Us",

        "about-us-p1": `
            We are a family-owned gardening company founded over 20 years ago by two brothers passionate about the design and care of green spaces. With a strong commitment to quality and customer satisfaction, we have had the privilege of working with hundreds of people and carrying out thousands of projects, from residential gardens to large commercial spaces.
        `,

        "about-us-p2" : `
            Throughout our journey, we have built a reputation based on professionalism, dedication, and respect for the environment. We take pride in our team of experts, who work diligently to transform every corner into a green, fresh, and lively space. Each of our services — from garden design and construction to pool maintenance and the sale of a wide variety of plants — is designed to meet the needs of our clients, ensuring tailored and lasting solutions.
        `,

        "about-us-p3" : `
            We believe that a well-maintained green space not only beautifies its surroundings but also brings peace and well-being. At Mayayo Garden, each project is an opportunity to create beauty and leave a positive mark on nature.
        `,

        "services-header" : "Our Services",
        "services-garden-header": "Gardens",
        "services-garden-description": "Design and construction of beautiful green environments.",
        "services-pool-header" : "Pools",
        "services-pool-description" : "Maintenance and all kinds of care for your pool.",
        "services-plant-header" : "Plants",
        "services-plant-description": "We have a wide variety of plants in our greenhouse.",

        "find-us-header" : "Find Us"
    }
};

console.log(translations["en"]["title"]);


// Código para el slider de idioma
const languageSwitch = document.getElementById('languageSwitch');
var languageEnglish = false;

languageSwitch.addEventListener('click', function() {
    // Si ya está en inglés, cambiar a español
    if (languageEnglish) {
        languageEnglish = false;
        translate("es");
    } else {
        languageEnglish = true;
        translate("en");
    }
    
    // Cambia el botón de lado
    this.classList.toggle('active');
});

function translate(language) {
    // Accede a las traducciones del idioma seleccionado
    const translation = translations[language];

    // Asignar las traducciones a los elementos con las IDs correspondientes
    document.getElementById('nav-home').textContent = translation['nav-home'];
    document.getElementById('nav-services').textContent = translation['nav-services'];
    document.getElementById('nav-contact').textContent = translation['nav-contact'];
    document.getElementById('hero-title').textContent = translation['hero-title'];
    document.getElementById('hero-explore').textContent = translation['hero-explore'];
    document.getElementById('hero-contact').textContent = translation['hero-contact'];
    document.getElementById('about-us-header').textContent = translation['about-us-header'];
    document.getElementById('about-us-p1').textContent = translation['about-us-p1'];
    document.getElementById('about-us-p2').textContent = translation['about-us-p2'];
    document.getElementById('about-us-p3').textContent = translation['about-us-p3'];
    document.getElementById('services-header').textContent = translation['services-header'];
    document.getElementById('services-garden-header').textContent = translation['services-garden-header'];
    document.getElementById('services-garden-description').textContent = translation['services-garden-description'];
    document.getElementById('services-pool-header').textContent = translation['services-pool-header'];
    document.getElementById('services-pool-description').textContent = translation['services-pool-description'];
    document.getElementById('services-plant-header').textContent = translation['services-plant-header'];
    document.getElementById('services-plant-description').textContent = translation['services-plant-description'];
    document.getElementById('find-us-header').textContent = translation['find-us-header'];
}

