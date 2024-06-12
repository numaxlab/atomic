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
  tags: ['autodocs'],
  render: (args) => {
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
    contentWrapper.className = 'banner-content-wrapper'
    a.className = 'banner-link'
    a.setAttribute('href', '#')

    title.innerHTML = args.title
    text.innerHTML = args.text

    content.appendChild(title)
    content.appendChild(text)
    contentWrapper.appendChild(content)

    let cssClass = ['ml-banner', args.size, args.variant]

    if (args.hasMedia) {
      cssClass.push('has-media')

      backgroundOverlay.className = 'banner-background-overlay'
      backgroundOverlay.style.backgroundImage = `url(${args.imageSrc})`
      a.appendChild(backgroundOverlay)
    }

    a.appendChild(contentWrapper)

    banner.appendChild(a)
    banner.className = cssClass.join(' ')

    return banner
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

export const BannerStories: Story = {}
