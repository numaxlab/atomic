import type {Meta, StoryObj} from '@storybook/html'

type HeadingArgs = {
    tag: string;
    size: string;
    label: string;
}

const meta: Meta<HeadingArgs> = {
    title: 'Atoms/Heading',
    render: (args) => {
        const heading = document.createElement(args.tag)
        heading.innerText = args.label

        heading.className = ['at-heading', args.size].join(' ')

        return heading
    },
    argTypes: {
        label: {control: 'text'},
        tag: {
            control: {type: 'select'},
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        },
        size: {
            control: {type: 'select'},
            options: ['is-1', 'is-2', 'is-3', 'is-4'],
        },
    },
    args: {
        tag: 'h1',
        label: 'Heading',
        size: 'is-1',
    },
}

export default meta

type Story = StoryObj<HeadingArgs>;

export const Heading1: Story = {
    args: {
        tag: 'h1',
        label: 'Heading 1',
    },
}

export const Heading2: Story = {
    args: {
        tag: 'h2',
        label: 'Heading 2',
    },
}

export const Heading3: Story = {
    args: {
        tag: 'h3',
        label: 'Heading 3',
    },
}

export const Heading4: Story = {
    args: {
        tag: 'h4',
        label: 'Heading 4',
    },
}
