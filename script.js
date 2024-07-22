// Change header background on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.65)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    }
});

// Ensure the initial state is set correctly when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)';

    // Testimonial slider functionality
    const slider = document.querySelector('.testimonials');
    const testimonials = document.querySelectorAll('.testimonial');
    const leftArrow = document.querySelector('.left-button');
    const rightArrow = document.querySelector('.right-button');

    let currentIndex = 0;

    function updateSlider() {
        const testimonialWidth = testimonials[0].offsetWidth + 20;
        slider.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;
    }

    function cycleTestimonials() {
        currentIndex++;
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }
        updateSlider();
    }

    leftArrow.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
        updateSlider();
    });

    rightArrow.addEventListener('click', function() {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);

    setInterval(cycleTestimonials, 5000); // Automatically cycle testimonials every 5 seconds
});
