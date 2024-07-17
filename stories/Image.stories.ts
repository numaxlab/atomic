import type { Meta, StoryObj } from '@storybook/html'

type ImageArgs = {
  src: string;
  alt: string;
  caption: string;
};

const meta: Meta<ImageArgs> = {
  title: 'Atoms/Image',
  tags: ['autodocs'],
  render: (args) => {
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const figCaption = document.createElement('figcaption')

    img.src = args.src
    img.alt = args.alt
    figCaption.className = 'image-caption'
    figCaption.innerText = args.caption

    figure.className = ['at-image'].join(' ')
    figure.appendChild(img)
    figure.appendChild(figCaption)

    return figure
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    caption: { control: 'text' },
  },
  args: {
    src: 'https://picsum.photos/600/400',
    alt: '',
    caption: 'Lorem ipsum dolor sit amet',
  },
}

export default meta

type Story = StoryObj<ImageArgs>;

export const ImageStories: Story = {
  args: {
    src: 'https://picsum.photos/600/400',
    alt: '',
    caption: 'Lorem ipsum dolor sit amet',
  },
}
