
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


document.addEventListener("DOMContentLoaded", function() {
    // تحديد شريط الروابط
    const navBar = document.querySelector('.nav-bar');
    // تحديد مكان الشريط الأساسي
    const sticky = navBar.offsetTop;

    function checkScroll() {
        // إذا تجاوز التمرير مكان الشريط الأساسي
        if (window.pageYOffset >= sticky) {
            navBar.classList.add("sticky");
        } else {
            navBar.classList.remove("sticky");
        }
    }

    // إضافة حدث التمرير
    window.addEventListener('scroll', checkScroll);
});


document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.querySelector('.nav-bar');
    const navPlaceholder = document.getElementById('nav-placeholder');
    const sticky = navBar.offsetTop;

    function checkScroll() {
        if (window.pageYOffset >= sticky) {
            navBar.classList.add("sticky");
            navPlaceholder.style.height = `${navBar.offsetHeight}px`; /* تعيين ارتفاع div التعويضي */
        } else {
            navBar.classList.remove("sticky");
            navPlaceholder.style.height = '0'; /* إعادة تعيين ارتفاع div التعويضي */
        }
    }

    window.addEventListener('scroll', checkScroll);
});