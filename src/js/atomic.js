import Alpine from 'alpinejs';
import accordion from './components/accordion';
import carousel from './components/carousel';
import '../css/atomic.css';

Alpine.data('accordion', accordion);
Alpine.data('carousel', carousel);

Alpine.start();
