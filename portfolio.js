document.addEventListener('DOMContentLoaded', function() {
    
    function afficherFormulaire() {
        document.getElementById("formulaire").style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == document.getElementById("formulaire")) {
            document.getElementById("formulaire").style.display = "none";
        }
    }

    // Formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nom = document.getElementById('nom').value;
            const prenom = document.getElementById('prenom').value; 
            const email = document.getElementById('email').value;

            if (nom && prenom && email) { 
                document.getElementById('status').innerHTML = 'Message envoyé avec succès !';
                this.reset();
            } else {
                document.getElementById('status').innerHTML = 'Veuillez remplir tous les champs.';
            }
        });
    }

    const elements = document.querySelectorAll('.skill-card, .project-card');
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(50px)';
    });

    window.addEventListener('scroll', function() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
                element.style.transition = 'all 0.5s ease';
            }
        });
    });

    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width') + '%';
    });

    const contactButton = document.querySelector('.cta-btn');
    if (contactButton) {
        contactButton.addEventListener('click', afficherFormulaire);
    }
});
