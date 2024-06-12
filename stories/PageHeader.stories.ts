import type { Meta, StoryObj } from '@storybook/html'

type PageHeaderArgs = {
  label: string;
};

const meta: Meta<PageHeaderArgs> = {
  title: 'Organisms/Page Header',
  tags: ['autodocs'],
  render: (args) => {
    const pageHeader = document.createElement('header')
    pageHeader.innerText = args.label

    pageHeader.className = ['org-page-header'].join(' ')

    return pageHeader
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'PageHeader',
  },
}

export default meta

type Story = StoryObj<PageHeaderArgs>;

export const PageHeaderStories: Story = {
  args: {
    label: 'PageHeader',
  },
}
