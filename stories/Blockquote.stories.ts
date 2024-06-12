import type { Meta, StoryObj } from '@storybook/html'

type BlockquoteArgs = {
  label: string;
};

const meta: Meta<BlockquoteArgs> = {
  title: 'Atoms/Blockquote',
  tags: ['autodocs'],
  render: (args) => {
    const blockquote = document.createElement('blockquote')
    blockquote.innerText = args.label

    blockquote.className = ['at-blockquote'].join(' ')

    return blockquote
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
}

export default meta

type Story = StoryObj<BlockquoteArgs>;

export const BlockquoteStories: Story = {
  args: {
    label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
}
