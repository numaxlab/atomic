import type { Meta, StoryObj } from '@storybook/html'

type ModulesContainerArgs = {
  label: string;
};

const meta: Meta<ModulesContainerArgs> = {
  title: 'Organisms/Modules Container',
  tags: ['autodocs'],
  render: (args) => {
    const modulesContainer = document.createElement('section')
    modulesContainer.innerText = args.label

    modulesContainer.className = ['org-modules-container'].join(' ')

    return modulesContainer
  },
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'ModulesContainer',
  },
}

export default meta

type Story = StoryObj<ModulesContainerArgs>;

export const ModulesContainerStories: Story = {
  args: {
    label: 'ModulesContainer',
  },
}
