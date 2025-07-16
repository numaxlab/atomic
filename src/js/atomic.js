import Alpine from 'alpinejs';
import carousel from './components/carousel';
import collapsible from './components/collapsible';
import '../css/atomic.css';

Alpine.data('carousel', carousel);
Alpine.data('collapsible', collapsible);

Alpine.start();
