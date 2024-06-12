import type { Meta, StoryObj } from '@storybook/html'

type AccordionArgs = {
  label: string;
};

const meta: Meta<AccordionArgs> = {
  title: 'Organisms/Accordion',
  tags: ['autodocs'],
  render: (args) => {
    const accordion = document.createElement('section')
    accordion.innerText = args.label

    accordion.className = ['org-accordion'].join(' ')

    return accordion
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Accordion',
  },
}

export default meta

type Story = StoryObj<AccordionArgs>;

export const AccordionStories: Story = {
  args: {
    label: 'Accordion',
  },
}
