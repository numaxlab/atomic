import type { Meta, StoryObj } from '@storybook/html'

type TooltipArgs = {
  label: string;
};

const meta: Meta<TooltipArgs> = {
  title: 'Atoms/Tooltip',
  tags: ['autodocs'],
  render: (args) => {
    const tooltip = document.createElement('span')
    tooltip.innerText = args.label

    tooltip.className = ['at-tooltip'].join(' ')

    return tooltip
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Tooltip',
  },
}

export default meta

type Story = StoryObj<TooltipArgs>;

export const TooltipStories: Story = {
  args: {
    label: 'Tooltip',
  },
}
