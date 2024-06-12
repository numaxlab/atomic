import type { Meta, StoryObj } from '@storybook/html'

type TableArgs = {
  label: string;
};

const meta: Meta<TableArgs> = {
  title: 'Molecules/Table',
  tags: ['autodocs'],
  render: (args) => {
    const table = document.createElement('table')

    table.className = ['ml-table'].join(' ')

    return table
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Table',
  },
}

export default meta

type Story = StoryObj<TableArgs>;

export const TableStories: Story = {
  args: {
    label: 'Table',
  },
}
