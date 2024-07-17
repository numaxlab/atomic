import type { Meta, StoryObj } from '@storybook/html'

type LeadArgs = {
  label: string;
};

const meta: Meta<LeadArgs> = {
  title: 'Atoms/Lead',
  render: (args) => {
    const lead = document.createElement('div')
    lead.innerText = args.label

    lead.className = ['at-lead'].join(' ')

    return lead
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Nam sit amet neque imperdiet, tempor lacus at, posuere erat. Suspendisse tincidunt, est id rhoncus facilisis, velit tellus fringilla nisi, quis lacinia lorem tellus a neque',
  },
}

export default meta

type Story = StoryObj<LeadArgs>;

export const Single: Story = {
  args: {
    label: 'Nam sit amet neque imperdiet, tempor lacus at, posuere erat. Suspendisse tincidunt, est id rhoncus facilisis, velit tellus fringilla nisi, quis lacinia lorem tellus a neque',
  },
}
