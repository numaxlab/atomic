import type { Meta, StoryObj } from '@storybook/html'

type TierArgs = {
  label: string;
};

const meta: Meta<TierArgs> = {
  title: 'Organisms/Tier',
  tags: ['autodocs'],
  render: (args) => {
    const tier = document.createElement('section')
    tier.innerText = args.label

    tier.className = ['org-tier'].join(' ')

    return tier
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Tier',
  },
}

export default meta

type Story = StoryObj<TierArgs>;

export const TierStories: Story = {
  args: {
    label: 'Tier',
  },
}
