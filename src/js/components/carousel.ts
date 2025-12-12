import type { AlpineComponent } from "alpinejs";

interface CarouselComponent {
    activeSlide: number;
    totalSlides: number;
    autoPlayInterval: number | null;
    isPlaying: boolean;
    autoplay: boolean;
    autoplayDelay: number;
    loop: boolean;
    slidesPerView: number;
    startAutoPlay(): void;
    stopAutoPlay(): void;
    togglePlayPause(): void;
    nextSlide(): void;
    prevSlide(): void;
    transformStyle: string;
}

export default (
    options = {
        autoplay: false,
        autoplayDelay: 5000,
        loop: true,
        slidesPerView: 1,
    },
): AlpineComponent<CarouselComponent> => ({
    activeSlide: 0,
    totalSlides: 0,
    autoPlayInterval: null,
    isPlaying: true,
    autoplay: options.autoplay,
    autoplayDelay: options.autoplayDelay,
    loop: options.loop,
    slidesPerView: options.slidesPerView,

    init(): void {
        this.totalSlides = this.$el.querySelectorAll(".carousel-slide").length;

        if (this.autoplay) {
            this.startAutoPlay();
        }
    },

    startAutoPlay(): void {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }

        this.autoPlayInterval = window.setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    },

    stopAutoPlay(): void {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    },

    togglePlayPause(): void {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
            this.startAutoPlay();
        } else {
            this.stopAutoPlay();
        }
    },

    nextSlide(): void {
        if (this.activeSlide < this.totalSlides - this.slidesPerView) {
            this.activeSlide++;
        } else if (this.loop) {
            this.activeSlide = 0;
        } else {
            this.stopAutoPlay();
            this.isPlaying = false;
        }
    },

    prevSlide(): void {
        if (this.activeSlide > 0) {
            this.activeSlide--;
        } else if (this.loop) {
            this.activeSlide = this.totalSlides - this.slidesPerView;
        }
    },

    get transformStyle(): string {
        const slideWidthPercentage = 100 / this.slidesPerView;

        return `transform: translateX(-${this.activeSlide * slideWidthPercentage}%)`;
    },
});
