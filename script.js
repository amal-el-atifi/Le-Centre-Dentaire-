document.addEventListener('DOMContentLoaded', () => {
    const testimonialForm = document.getElementById('testimonialForm');
    const testimonialResponse = document.getElementById('testimonialResponse');

    testimonialForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        // Simuler l'envoi du formulaire et afficher une réponse
        testimonialResponse.textContent = 'Merci pour votre avis !';
        testimonialResponse.classList.add('show');
        testimonialForm.reset(); // Réinitialiser le formulaire
    });

    // Pour les autres interactions (si besoin)
});


