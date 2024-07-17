import type { Meta, StoryObj } from '@storybook/html'

type SmallArgs = {
  label: string;
};

const meta: Meta<SmallArgs> = {
  title: 'Atoms/Small',
  render: (args) => {
    const small = document.createElement('small')
    small.innerText = args.label

    small.className = ['at-small'].join(' ')

    return small
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
}

export default meta

type Story = StoryObj<SmallArgs>;

export const Single: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
}
