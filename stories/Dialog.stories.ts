import type {Meta, StoryObj} from '@storybook/html';

type DialogArgs = {};

const meta: Meta<DialogArgs> = {
    title: 'Organisms/Dialog',
    tags: ['autodocs'],
    render: (args) => {
        const button = document.createElement('button');

        button.className = 'at-button is-primary';
        button.innerText = 'Abrir diálogo';

        return button;
    },
    argTypes: {},
    args: {},
};

export default meta

type Story = StoryObj<DialogArgs>;

export const DialogStories: Story = {
    args: {},
};
