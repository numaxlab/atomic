export default (options = {}) => ({
    activeSlide: 0,
    totalSlides: 0,
    autoPlayInterval: null,
    isPlaying: true,
    autoplay: options.autoplay !== undefined ? options.autoplay : false,
    autoplayDelay: options.autoplayDelay || 5000,
    loop: options.loop !== undefined ? options.loop : true,
    slidesPerView: options.slidesPerView || 1,

    init () {
        // Obter o número total de diapositivas ao inicializar
        this.totalSlides = this.$el.querySelectorAll('.carousel-slide').length;

        // Iniciar a reprodución automática se está habilitada
        if (this.autoplay) {
            this.startAutoPlay();
        }

        // Opcional: Se queremos un carrusel con múltiples diapositivas visibles
        // poderíamos ter que axustar aquí o cálculo do transform
    },

    // Iniciar a reprodución automática
    startAutoPlay () {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    },

    // Deter a reprodución automática
    stopAutoPlay () {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null; // Limpar a referencia
        }
    },

    // Alternar entre reprodución e pausa
    togglePlayPause () {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
            this.startAutoPlay();
        } else {
            this.stopAutoPlay();
        }
    },

    // Ir á seguinte diapositiva
    nextSlide () {
        if (this.activeSlide < this.totalSlides - this.slidesPerView) {
            this.activeSlide++;
        } else if (this.loop) {
            this.activeSlide = 0; // Volver ao inicio se o bucle está activado
        } else {
            this.stopAutoPlay(); // Deter se non hai bucle e chegamos ao final
            this.isPlaying = false;
        }
    },

    // Ir á diapositiva anterior
    prevSlide () {
        if (this.activeSlide > 0) {
            this.activeSlide--;
        } else if (this.loop) {
            this.activeSlide = this.totalSlides - this.slidesPerView; // Ir á última se o bucle está activado
        }
    },

    // Calcular o estilo de transformación para o desprazamento
    get transformStyle () {
        // Asumimos que cada diapositiva ten un ancho igual e se mostra 1 por defecto
        const slideWidthPercentage = 100 / this.slidesPerView;
        return `transform: translateX(-${this.activeSlide * slideWidthPercentage}%)`;
    },
});