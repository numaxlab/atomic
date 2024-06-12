import type { Meta, StoryObj } from '@storybook/html'
import variants from './variants'

type ButtonArgs = {
  variant: string;
  label: string;
}

const meta: Meta<ButtonArgs> = {
  title: 'Atoms/Button',
  render: (args) => {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.innerText = args.label

    btn.className = ['at-button', args.variant].join(' ')

    return btn
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: variants,
    },
  },
  args: {
    label: 'Button',
  },
}

export default meta

type Story = StoryObj<ButtonArgs>;

export const ButtonStories: Story = {
  args: {
    variant: 'is-primary',
  },
}
