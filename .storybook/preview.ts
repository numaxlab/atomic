import '../dist/css/numaxlab-atomic.css'

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
          'Templates'],
      },
    },
  },
}

export default preview
