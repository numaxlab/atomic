import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
    title: "Organisms/Tabs",
    tags: ["autodocs"],
    render: () => {
        const tabs = document.createElement("div");

        tabs.className = "org-tabs";

        return tabs;
    },
    argTypes: {},
    args: {},
};

export default meta;

type Story = StoryObj;

export const TabsStories: Story = {
    args: {},
};
