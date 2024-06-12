import type { Meta, StoryObj } from '@storybook/html'

type BreadcrumbArgs = {
  items: number;
  tag: string;
};

const meta: Meta<BreadcrumbArgs> = {
  title: 'Molecules/Breadcrumb',
  tags: ['autodocs'],
  render: (args) => {
    const breadcrumb = document.createElement('ol')

    breadcrumb.className = ['ml-breadcrumb'].join(' ')

    for (let i = 1; i <= args.items; i++) {
      const li = document.createElement('li')
      const tag = document.createElement(args.tag)
      if (args.tag === 'a') {
        tag.setAttribute('href', '#')
      }
      tag.innerText = 'Item ' + i

      li.appendChild(tag)

      breadcrumb.appendChild(li)
    }

    return breadcrumb
  },
  argTypes: {
    items: {
      control: { type: 'number', min: 1, max: 5, step: 1 },
    },
    tag: {
      control: { type: 'select' },
      options: ['a', 'span'],
    },
  },
  args: {
    tag: 'a',
    items: 2,
  },
}

export default meta

type Story = StoryObj<BreadcrumbArgs>;

export const BreadcrumbStories: Story = {
  args: {
    items: 2,
  },
}
