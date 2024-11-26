import type {Meta, StoryObj} from '@storybook/html'

type WallArgs = {
    label: string;
};

const meta: Meta<WallArgs> = {
    title: 'Organisms/Wall',
    render: (args) => {
        const wall = document.createElement('section')
        wall.innerText = args.label

        wall.className = ['org-wall'].join(' ')

        return wall
    },
    argTypes: {
        label: {control: 'text'},
    },
    args: {
        label: 'Wall',
    },
}

export default meta

type Story = StoryObj<WallArgs>;

export const Single: Story = {
    args: {
        label: 'Wall',
    },
}
