import type { Meta, StoryObj } from '@storybook/html'

type TierArgs = {
  header: string;
  content: string;
};

const meta: Meta<TierArgs> = {
  title: 'Organisms/Tier',
  tags: ['autodocs'],
  render: (args) => {
    const tier = document.createElement('section')
    const header = document.createElement('header')
    const h2 = document.createElement('h2')
    const div = document.createElement('div')

    div.className = 'tier-content'
    h2.className = 'at-title'
    header.className = 'tier-header'

    h2.innerText = args.header
    div.innerHTML = args.content

    tier.className = ['org-tier'].join(' ')

    header.appendChild(h2)
    tier.appendChild(header)
    tier.appendChild(div)

    return tier
  },
  argTypes: {
    header: { control: 'text' },
    content: { control: 'text' },
  },
  args: {
    header: 'Tier',
    content: 'Content',
  },
}

export default meta

type Story = StoryObj<TierArgs>;

export const TierStories: Story = {
  args: {
    header: 'Tier',
    content: 'Content',
  },
}
