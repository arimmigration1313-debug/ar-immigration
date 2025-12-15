// ============================================
// Hero Slider Functionality
// ============================================

class HeroSlider {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        if (!this.slider) return;

        this.slides = this.slider.querySelectorAll('.hero-slide');
        this.dots = this.slider.querySelectorAll('.slider-dot');
        this.prevBtn = this.slider.querySelector('.slider-arrow.prev');
        this.nextBtn = this.slider.querySelector('.slider-arrow.next');

        this.currentSlide = 0;
        this.slideInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        // Show first slide
        this.showSlide(0);

        // Event listeners for navigation
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Pause on hover
        this.slider.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.slider.addEventListener('mouseleave', () => this.startAutoPlay());

        // Touch/Swipe support
        this.addTouchSupport();

        // Start autoplay
        this.startAutoPlay();
    }

    showSlide(index) {
        // Remove active class from all slides and dots
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');

        this.currentSlide = index;
    }

    nextSlide() {
        let next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }

    prevSlide() {
        let prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prev);
    }

    goToSlide(index) {
        this.showSlide(index);
    }

    startAutoPlay() {
        this.slideInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }

    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;

        this.slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                this.nextSlide();
            } else {
                // Swipe right - previous slide
                this.prevSlide();
            }
        }
    }
}

// Testimonial Carousel
class TestimonialCarousel {
    constructor(selector) {
        this.carousel = document.querySelector(selector);
        if (!this.carousel) return;

        this.items = this.carousel.querySelectorAll('.testimonial-item');
        this.dots = this.carousel.querySelectorAll('.carousel-dot');

        this.currentIndex = 0;
        this.autoPlayDelay = 6000; // 6 seconds
        this.carouselInterval = null;

        this.init();
    }

    init() {
        this.showItem(0);

        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });

        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => this.stop());
        this.carousel.addEventListener('mouseleave', () => this.start());

        this.start();
    }

    showItem(index) {
        this.items.forEach(item => item.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        this.items[index].classList.add('active');
        this.dots[index].classList.add('active');

        this.currentIndex = index;
    }

    next() {
        let nextIndex = (this.currentIndex + 1) % this.items.length;
        this.showItem(nextIndex);
    }

    goTo(index) {
        this.showItem(index);
    }

    start() {
        this.carouselInterval = setInterval(() => this.next(), this.autoPlayDelay);
    }

    stop() {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
        }
    }
}

window.initSliders = function () {
    new HeroSlider('.hero-slider');
    new TestimonialCarousel('.testimonial-carousel');
};
