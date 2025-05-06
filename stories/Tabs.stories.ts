import type {Meta, StoryObj} from '@storybook/html';

type TabsArgs = {};

const meta: Meta<TabsArgs> = {
    title: 'Organisms/Tabs',
    tags: ['autodocs'],
    render: (args) => {
        const tabs = document.createElement('div');

        tabs.className = 'org-tabs';

        return tabs;
    },
    argTypes: {},
    args: {},
};

export default meta

type Story = StoryObj<TabsArgs>;

export const TabsStories: Story = {
    args: {},
};
