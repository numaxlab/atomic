import type { Meta, StoryObj } from '@storybook/html'

type ButtonGroupArgs = {
  items: number;
  isVertical: boolean;
};

const meta: Meta<ButtonGroupArgs> = {
  title: 'Molecules/Button Group',
  tags: ['autodocs'],
  render: (args) => {
    const buttonGroup = document.createElement('div')

    buttonGroup.role = 'group'
    buttonGroup.ariaLabel = 'Etiqueta do grupo de botóns'

    let cssClass = ['ml-button-group']

    if (args.isVertical) {
      cssClass.push('is-vertical')
    }

    buttonGroup.className = cssClass.join(' ')

    for (let i = 1; i <= args.items; i++) {
      const button = document.createElement('button')

      button.className = 'at-button is-primary'
      button.innerText = 'Botón ' + i

      buttonGroup.appendChild(button)
    }

    return buttonGroup
  },
  argTypes: {
    items: {
      control: { type: 'number', min: 1, max: 5, step: 1 },
    },
    isVertical: { control: 'boolean' },
  },
  args: {
    items: 2,
    isVertical: false,
  },
}

export default meta

type Story = StoryObj<ButtonGroupArgs>;

export const Single: Story = {
  args: {
    items: 2,
    isVertical: false,
  },
}
