import type {Meta, StoryObj} from '@storybook/html'

type BlockquoteArgs = {
    label: string;
    footer: boolean;
};

const meta: Meta<BlockquoteArgs> = {
    title: 'Atoms/Blockquote',
    render: (args) => {
        const blockquote = document.createElement('blockquote')
        blockquote.innerText = args.label

        blockquote.className = ['at-blockquote'].join(' ')

        if (args.footer) {
            const figure = document.createElement('figure')
            const figCaption = document.createElement('figcaption')

            figure.className = ['at-blockquote'].join(' ')

            blockquote.className = ''

            figCaption.className = 'blockquote-footer'
            figCaption.innerText = 'Pé da cita'

            figure.appendChild(blockquote)
            figure.appendChild(figCaption)

            return figure
        }

        return blockquote
    },
    argTypes: {
        label: {control: 'text'},
        footer: {control: 'boolean'},
    },
    args: {
        label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        footer: false,
    },
}

export default meta

type Story = StoryObj<BlockquoteArgs>;

export const Single: Story = {
    args: {
        label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        footer: false,
    },
}
