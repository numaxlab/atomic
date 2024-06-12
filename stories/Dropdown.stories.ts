import type { Meta, StoryObj } from '@storybook/html'

type DropdownArgs = {
  label: string;
};

const meta: Meta<DropdownArgs> = {
  title: 'Molecules/Dropdown',
  tags: ['autodocs'],
  render: (args) => {
    const dropdown = document.createElement('ul')

    dropdown.className = ['ml-dropdown'].join(' ')

    return dropdown
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Dropdown',
  },
}

export default meta

type Story = StoryObj<DropdownArgs>;

export const DropdownStories: Story = {
  args: {
    label: 'Dropdown',
  },
}
