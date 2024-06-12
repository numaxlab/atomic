import type { Meta, StoryObj } from '@storybook/html'

type SiteHeaderArgs = {
  label: string;
};

const meta: Meta<SiteHeaderArgs> = {
  title: 'Organisms/Site Header',
  tags: ['autodocs'],
  render: (args) => {
    const siteHeader = document.createElement('header')
    siteHeader.innerText = args.label

    siteHeader.className = ['org-site-header'].join(' ')

    return siteHeader
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'SiteHeader',
  },
}

export default meta

type Story = StoryObj<SiteHeaderArgs>;

export const SiteHeaderStories: Story = {
  args: {
    label: 'SiteHeader',
  },
}
