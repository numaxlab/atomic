import type { Meta, StoryObj } from '@storybook/html'

type SummaryArgs = {
  label: string;
};

const meta: Meta<SummaryArgs> = {
  title: 'Molecules/Summary',
  tags: ['autodocs'],
  render: (args) => {
    const summary = document.createElement('article')
    summary.innerText = args.label

    summary.className = ['ml-summary'].join(' ')

    return summary
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Summary',
  },
}

export default meta

type Story = StoryObj<SummaryArgs>;

export const SummaryStories: Story = {
  args: {
    label: 'Summary',
  },
}
