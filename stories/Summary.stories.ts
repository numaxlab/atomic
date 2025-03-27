import type {Meta, StoryObj} from '@storybook/html'

type SummaryArgs = {
    hasMedia: boolean;
    title: string;
    text: string;
    imageSrc: string;
};

const meta: Meta<SummaryArgs> = {
    title: 'Molecules/Summary',
    tags: ['autodocs'],
    render: (args) => {
        const row = document.createElement('div')
        const col = document.createElement('div')

        const summary = document.createElement('article')
        const heading = document.createElement('h2')
        const link = document.createElement('a')
        const content = document.createElement('div')

        heading.className = 'at-heading'
        content.className = 'summary-content'
        summary.className = ['ml-summary'].join(' ')

        link.href = '#'
        link.innerText = args.title

        content.innerHTML = args.text

        if (args.hasMedia) {
            const img = document.createElement('img')
            const imgLink = document.createElement('a')

            img.src = args.imageSrc
            img.alt = ''

            imgLink.className = 'summary-media-wrapper'
            imgLink.href = '#'

            imgLink.appendChild(img)

            summary.appendChild(imgLink)
        }

        heading.appendChild(link)
        summary.appendChild(heading)

        if (args.text) {
            summary.appendChild(content)
        }

        row.className = 'flex'
        col.className = 'w-1/3'

        col.appendChild(summary)
        row.appendChild(col)

        return row
    },
    argTypes: {
        hasMedia: {control: 'boolean'},
        title: {control: 'text'},
        text: {control: 'text'},
        imageSrc: {control: 'text'},
    },
    args: {
        hasMedia: false,
        imageSrc: 'https://picsum.photos/720/521',
        title: 'Lorem ipsum dolor sit amet',
        text: '<p>Vestibulum turpis magna, pharetra vitae sapien non, rhoncus hendrerit nulla. Nulla diam lacus, tincidunt nec ultrices et, congue eu dolor.</p>',
    },
}

export default meta

type Story = StoryObj<SummaryArgs>;

export const SummaryStories: Story = {}
