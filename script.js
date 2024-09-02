document.addEventListener("DOMContentLoaded", function () {
    const elements = {
        mainTitle: document.getElementById("main-title"),
        navAbout: document.getElementById("nav-about"),
        navServices: document.getElementById("nav-services"),
        navGallery: document.getElementById("nav-gallery"),
        navContact: document.getElementById("nav-contact"),
        aboutTitle: document.getElementById("about-title"),
        aboutText: document.getElementById("about-text"),
        servicesTitle: document.getElementById("services-title"),
        serviceSize: document.getElementById("service-size"),
        serviceExterior: document.getElementById("service-exterior"),
        serviceInterior: document.getElementById("service-interior"),
        serviceComplete: document.getElementById("service-complete"),
        serviceSmall: document.getElementById("service-small"),
        serviceMedium: document.getElementById("service-medium"),
        serviceLarge: document.getElementById("service-large"),
        galleryTitle: document.getElementById("gallery-title"),
        galleryText: document.getElementById("gallery-text"),
        contactTitle: document.getElementById("contact-title"),
        contactText: document.getElementById("contact-text"),
        contactLabelName: document.getElementById("contact-label-name"),
        contactLabelEmail: document.getElementById("contact-label-email"),
        contactLabelMessage: document.getElementById("contact-label-message"),
        contactSubmit: document.getElementById("contact-submit"),
        languageToggle: document.getElementById("language-toggle")
    };

    elements.languageToggle.addEventListener("click", function () {
        if (elements.languageToggle.innerText === "Switch to English") {
            elements.mainTitle.innerText = "Car Wash at Home";
            elements.navAbout.innerText = "About Me";
            elements.navServices.innerText = "Prices";
            elements.navGallery.innerText = "Before and After";
            elements.navContact.innerText = "Contact";
            elements.aboutTitle.innerText = "About Me";
            elements.aboutText.innerText = "Hi! My name is José Luis, and I offer home car washing services in my free time. I am not a company or a self-employed person, just a car care enthusiast who wants to earn extra money. My goal is to leave your car like new, both inside and out. I reach all of La Alcaidesa and Sotogrande, take a look at my services and if you are interested, do not hesitate to contact me.";
            elements.servicesTitle.innerText = "Prices";
            elements.serviceSize.innerText = "Vehicle Size";
            elements.serviceExterior.innerText = "Exterior Cleaning";
            elements.serviceInterior.innerText = "Interior Cleaning";
            elements.serviceComplete.innerText = "Complete Cleaning";
            elements.serviceSmall.innerText = "Small (e.g., Compact Car)";
            elements.serviceMedium.innerText = "Medium (e.g., Sedan)";
            elements.serviceLarge.innerText = "Large (e.g., SUV)";
            elements.galleryTitle.innerText = "Before and After";
            elements.galleryText.innerText = "Here you can see some examples of my work:";
            elements.contactTitle.innerText = "Contact";
            elements.contactText.innerText = "If you are interested in hiring my services, do not hesitate to contact me. You can use the following form or send me a direct message to my WhatsApp number. **In Message write; -Your car and its model -Type of service you want and best suited to your needs - Residence area, (La Alcaidesa, Sotogrande or nearby areas) -Your telephone number and write what do you prefer if agend your wash via call or via WhatsApp";
            elements.contactLabelName.innerText = "Name:";
            elements.contactLabelEmail.innerText = "Email:";
            elements.contactLabelMessage.innerText = "Message:";
            elements.contactSubmit.value = "Send";
            elements.languageToggle.innerText = "Switch to Spanish";
        } else {
            elements.mainTitle.innerText = "Lavado de Coches a Domicilio";
            elements.navAbout.innerText = "Sobre Mí";
            elements.navServices.innerText = "Precios";
            elements.navGallery.innerText = "Antes y Después";
            elements.navContact.innerText = "Contacto";
            elements.aboutTitle.innerText = "Sobre Mí";
            elements.aboutText.innerText = "¡Hola! Mi nombre es José Luis, y ofrezco servicios de lavado de coches a domicilio en mi tiempo libre. No soy una empresa ni un autónomo, solo un apasionado del cuidado de los coches que quiere ganar un dinero extra. Mi objetivo es dejar tu coche como nuevo, tanto por dentro como por fuera. Llego a toda La Alcaidesa y Sotogrande, echale un ojo a mis servicios y si estás interesado no dudes en contactarme.";
            elements.servicesTitle.innerText = "Precios";
            elements.serviceSize.innerText = "Tamaño del Vehículo";
            elements.serviceExterior.innerText = "Limpieza Exterior";
            elements.serviceInterior.innerText = "Limpieza Interior";
            elements.serviceComplete.innerText = "Limpieza Completa";
            elements.serviceSmall.innerText = "Pequeño (Ej. Coche Compacto)";
            elements.serviceMedium.innerText = "Mediano (Ej. Sedán)";
            elements.serviceLarge.innerText = "Grande (Ej. SUV)";
            elements.galleryTitle.innerText = "Antes y Después";
            elements.galleryText.innerText = "Aquí puedes ver algunos ejemplos de mi trabajo:";
            elements.contactTitle.innerText = "Contacto";
            elements.contactText.innerText = "Si estás interesado en contratar mis servicios, no dudes en contactarme. Puedes usar el siguiente formulario o enviarme un mensaje directo a mi número de WhatsApp. **En Mensaje escribe; -Tu coche y modelo del mismo -Tipo de servicio que desees y más se adapte a tus necesidades - Zona de residencia,(La Alcaidesa, Sotogrande o próximidades) -Tu numero de telofono especificando si prefieres agendar tu lavado en llamada o via WhatsApp**";
            elements.contactLabelName.innerText = "Nombre:";
            elements.contactLabelEmail.innerText = "Correo Electrónico:";
            elements.contactLabelMessage.innerText = "Mensaje:";
            elements.contactSubmit.value = "Enviar";
            elements.languageToggle.innerText = "Switch to English";
        }
    });
});