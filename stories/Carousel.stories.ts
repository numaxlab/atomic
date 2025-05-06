import type {Meta, StoryObj} from '@storybook/html';

type CarouselArgs = {};

const meta: Meta<CarouselArgs> = {
    title: 'Organisms/Carousel',
    tags: ['autodocs'],
    render: (args) => {
        // https://www.w3.org/WAI/ARIA/apg/patterns/carousel/examples/carousel-2-tablist/
        // https://www.smashingmagazine.com/2023/02/guide-building-accessible-carousels/
        const carousel = document.createElement('section');
        const carouselInner = document.createElement('div');
        const carouselControls = document.createElement('div');
        const carouselSlides = document.createElement('div');
        const rotationButton = document.createElement('button');
        const previousButton = document.createElement('button');
        const nextButton = document.createElement('button');

        carousel.className = 'org-carousel';
        carousel.ariaRoleDescription = 'carrusel';
        carousel.ariaLabel = 'Título do carrusel de imaxes';

        carouselInner.className = 'carousel-inner-wrapper';

        carouselControls.className = 'carousel-controls-wrapper';
        rotationButton.className = 'at-button is-primary';
        rotationButton.type = 'button';
        rotationButton.ariaLabel = 'Parar o cambio automático de diapositiva';
        rotationButton.innerHTML = '<i class="fa-solid fa-pause" aria-hidden="true"></i>';
        previousButton.className = 'at-button is-primary';
        previousButton.type = 'button';
        previousButton.ariaLabel = 'Anterior diapositiva';
        previousButton.setAttribute('aria-controls', 'carouselSlides');
        previousButton.innerHTML = '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>';
        nextButton.className = 'at-button is-primary';
        nextButton.type = 'button';
        nextButton.ariaLabel = 'Seguinte diapositiva';
        nextButton.setAttribute('aria-controls', 'carouselSlides');
        nextButton.innerHTML = '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
        carouselControls.appendChild(rotationButton);
        carouselControls.appendChild(previousButton);
        carouselControls.appendChild(nextButton);

        carouselSlides.className = 'carousel-slides-wrapper';
        carouselSlides.id = 'carouselSlides';
        carouselSlides.ariaLive = 'off';

        for (let i = 1; i <= 5; i++) {
            const carouselSlide = document.createElement('div');
            const carouselSlideMedia = document.createElement('a');
            const carouselSlideContent = document.createElement('div');

            carouselSlide.className = 'carousel-slide';
            carouselSlide.role = 'group';
            carouselSlide.ariaRoleDescription = 'diapositiva';
            carouselSlide.ariaLabel = `${i} de 5`;

            carouselSlideMedia.className = 'carousel-slide-media-wrapper';
            carouselSlideMedia.href = '#';
            carouselSlideMedia.innerHTML = '<img src="https://picsum.photos/720/521" alt="Título da imaxe ou da diapositiva">';

            carouselSlideContent.className = 'carousel-slide-content-wrapper';
            carouselSlideContent.innerHTML = '<h3><a href="#">Título da diapositiva</a></h3><p>Outro texto sobre a diapositiva</p>';

            carouselSlide.appendChild(carouselSlideMedia);
            carouselSlide.appendChild(carouselSlideContent);
            carouselSlides.appendChild(carouselSlide);
        }

        carouselInner.appendChild(carouselControls);
        carouselInner.appendChild(carouselSlides);
        carousel.appendChild(carouselInner);

        return carousel;
    },
    argTypes: {},
    args: {},
};

export default meta

type Story = StoryObj<CarouselArgs>;

export const CarouselStories: Story = {
    args: {},
};
