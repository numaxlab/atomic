import type {Meta, StoryObj} from '@storybook/html'

type TierArgs = {
    header: string;
    hasAction: boolean;
    content: string;
};

const meta: Meta<TierArgs> = {
    title: 'Organisms/Tier',
    tags: ['autodocs'],
    render: (args) => {
        const tier = document.createElement('section');
        const header = document.createElement('header');
        const h2 = document.createElement('h2');
        const div = document.createElement('div');

        div.className = 'tier-content';
        h2.className = 'at-heading is-3';
        header.className = 'tier-header';

        h2.innerText = args.header;
        div.innerHTML = args.content;

        tier.className = ['org-tier'].join(' ');

        header.appendChild(h2);

        if (args.hasAction) {
            const actions = document.createElement('nav');
            actions.className = 'tier-header-actions';
            actions.innerHTML = `<a href="#" class="text-sm">Acción</a>`;

            header.appendChild(actions);
        }

        tier.appendChild(header);
        tier.appendChild(div);

        return tier;
    },
    argTypes: {
        header: {control: 'text'},
        hasAction: {control: 'boolean'},
        content: {control: 'text'},
    },
    args: {
        header: 'Título do piso de contido',
        hasAction: false,
        content: 'Contido',
    },
}

export default meta

type Story = StoryObj<TierArgs>;

export const TierStories: Story = {};
