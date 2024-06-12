import type { Meta, StoryObj } from '@storybook/html'

type SiteFooterArgs = {
  label: string;
};

const meta: Meta<SiteFooterArgs> = {
  title: 'Organisms/Site Footer',
  tags: ['autodocs'],
  render: (args) => {
    const siteFooter = document.createElement('footer')
    siteFooter.innerText = args.label

    siteFooter.className = ['org-site-footer'].join(' ')

    return siteFooter
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'SiteFooter',
  },
}

export default meta

type Story = StoryObj<SiteFooterArgs>;

export const SiteFooterStories: Story = {
  args: {
    label: 'SiteFooter',
  },
}
