import '../src/js/atomic';
import '../src/css/fonts.css';
import '../src/css/icons.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: [
                    'Introduction',
                    'Installation',
                    'Changelog',
                    'Base',
                    'Atoms',
                    'Molecules',
                    'Organisms',
                    'Templates',
                ],
            },
        },
        docs: {
            source: {
                format: 'html',
            },
        },
        tags: ['autodocs'],
    },
};

export default preview;
