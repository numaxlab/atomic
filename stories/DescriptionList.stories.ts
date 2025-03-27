import type {Meta, StoryObj} from '@storybook/html'

type DescriptionListArgs = {
    items: number;
};

const meta: Meta<DescriptionListArgs> = {
    title: 'Atoms/Description List',
    tags: ['autodocs'],
    render: (args) => {
        const descriptionList = document.createElement('dl')
        descriptionList.classList.add('at-description-list')

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
    },
    args: {
        items: 2,
    },
}

export default meta

type Story = StoryObj<DescriptionListArgs>;

export const Single: Story = {
    args: {
        items: 2,
    },
}
