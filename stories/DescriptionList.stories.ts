import type {Meta, StoryObj} from '@storybook/html'

type DescriptionListArgs = {
    items: number;
    grid: boolean;
};

const meta: Meta<DescriptionListArgs> = {
    title: 'Atoms/Description List',
    tags: ['autodocs'],
    render: (args) => {
        const descriptionList = document.createElement('dl')
        descriptionList.classList.add('at-description-list')

        if (args.grid) {
            descriptionList.classList.add('is-grid')
        }

        for (let i = 1; i <= args.items; i++) {
            const dt = document.createElement('dt')
            const dd = document.createElement('dd')

            dt.innerText = 'Termo ' + i
            dd.innerText = 'Descrición ' + i

            descriptionList.appendChild(dt)
            descriptionList.appendChild(dd)
        }

        return descriptionList
    },
    argTypes: {
        items: {
            control: {type: 'number', min: 2, max: 10, step: 1},
        },
        grid: {control: 'boolean'},
    },
    args: {
        items: 2,
        grid: false
    },
}

export default meta

type Story = StoryObj<DescriptionListArgs>;

export const Single: Story = {
    args: {
        items: 2,
        grid: false
    },
}
