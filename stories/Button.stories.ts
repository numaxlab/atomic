import type {Meta, StoryObj} from '@storybook/html'
import variants from './variants'

type ButtonArgs = {
    variant: string;
    label: string;
    disabled: boolean;
}

const meta: Meta<ButtonArgs> = {
    title: 'Atoms/Button',
    render: (args) => {
        const btn = document.createElement('button')
        btn.type = 'button'
        btn.innerText = args.label

        btn.className = ['at-button', args.variant].join(' ')

        btn.disabled = args.disabled

        return btn
    },
    argTypes: {
        label: {control: 'text'},
        variant: {
            control: {type: 'select'},
            options: variants,
        },
        disabled: {control: 'boolean'},
    },
    args: {
        label: 'Botón',
        disabled: false
    },
}

export default meta

type Story = StoryObj<ButtonArgs>;

export const Primary: Story = {
    args: {
        variant: 'is-primary',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'is-secondary',
    },
}