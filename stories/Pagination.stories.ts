import type { Meta, StoryObj } from '@storybook/html'

type PaginationArgs = {
  label: string;
};

const meta: Meta<PaginationArgs> = {
  title: 'Molecules/Pagination',
  tags: ['autodocs'],
  render: (args) => {
    const pagination = document.createElement('nav')

    pagination.className = ['ml-pagination'].join(' ')

    return pagination
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Pagination',
  },
}

export default meta

type Story = StoryObj<PaginationArgs>;

export const PaginationStories: Story = {
  args: {
    label: 'Pagination',
  },
}
