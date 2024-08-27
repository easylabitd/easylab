
// Example JavaScript code for basic functionality

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
});




// Additional JavaScript functionality can be added here as needed



document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    function checkCards() {
        const triggerBottom = window.innerHeight * 0.8;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if(cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', checkCards);

    // استدعاء التحقق فور تحميل الصفحة
    checkCards();
});
