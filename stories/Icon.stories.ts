import type { Meta, StoryObj } from '@storybook/html'

type IconArgs = {
  label: string;
};

const meta: Meta<IconArgs> = {
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  render: (args) => {
    const icon = document.createElement('i')
    icon.innerText = args.label

    icon.className = ['at-icon'].join(' ')

    return icon
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Icon',
  },
}

export default meta

type Story = StoryObj<IconArgs>;

export const IconStories: Story = {
  args: {
    label: 'Icon',
  },
}
