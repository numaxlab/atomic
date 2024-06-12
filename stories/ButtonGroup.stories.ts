import type { Meta, StoryObj } from '@storybook/html'

type ButtonGroupArgs = {
  label: string;
};

const meta: Meta<ButtonGroupArgs> = {
  title: 'Molecules/Button Group',
  tags: ['autodocs'],
  render: (args) => {
    const buttonGroup = document.createElement('ul')

    buttonGroup.className = ['ml-button-group'].join(' ')

    return buttonGroup
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'ButtonGroup',
  },
}

export default meta

type Story = StoryObj<ButtonGroupArgs>;

export const ButtonGroupStories: Story = {
  args: {
    label: 'ButtonGroup',
  },
}
