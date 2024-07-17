import type { Meta, StoryObj } from '@storybook/html'
import variants from './variants'

type BannerArgs = {
  size: string;
  variant: string;
  hasMedia: boolean;
  imageSrc: string;
  title: string;
  text: string;
};

const meta: Meta<BannerArgs> = {
  title: 'Molecules/Banner',
  render: (args) => {
    const modulesContainer = document.createElement('div')
    const banner = document.createElement('article')
    const a = document.createElement('a')
    const backgroundOverlay = document.createElement('div')
    const contentWrapper = document.createElement('div')
    const content = document.createElement('div')
    const title = document.createElement('h2')
    const text = document.createElement('div')

    text.className = 'banner-text'
    title.className = 'at-title'
    content.className = 'banner-content'
    a.className = 'banner-inner-wrapper'
    a.setAttribute('href', '#')

    title.innerHTML = args.title
    text.innerHTML = args.text

    content.appendChild(title)
    content.appendChild(text)

    let cssClass = ['ml-banner', args.size, args.variant]

    if (args.hasMedia) {
      cssClass.push('has-media')

      backgroundOverlay.className = 'banner-background-overlay'
      backgroundOverlay.style.backgroundImage = `url(${args.imageSrc})`
      a.appendChild(backgroundOverlay)
    }

    a.appendChild(content)

    banner.appendChild(a)
    banner.className = cssClass.join(' ')

    modulesContainer.className = 'org-modules-container'
    modulesContainer.appendChild(banner)

    return modulesContainer
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['is-s', 'is-m', 'is-l', 'is-xl'],
    },
    variant: {
      control: { type: 'select' },
      options: variants,
    },
    hasMedia: { control: 'boolean' },
    imageSrc: { control: 'text' },
    title: { control: 'text' },
    text: { control: 'text' },
  },
  args: {
    size: 'is-m',
    variant: 'is-primary',
    hasMedia: true,
    imageSrc: 'https://picsum.photos/720/521',
    title: 'Lorem ipsum dolor sit amet',
    text: '<p>Vestibulum turpis magna, pharetra vitae sapien non, rhoncus hendrerit nulla. Nulla diam lacus, tincidunt nec ultrices et, congue eu dolor.</p>',
  },
}

export default meta

type Story = StoryObj<BannerArgs>;

export const Primary: Story = {}
