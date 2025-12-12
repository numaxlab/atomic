import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
    title: "Organisms/Dialog",
    tags: ["autodocs"],
    render: () => {
        const button = document.createElement("button");

        button.className = "at-button is-primary";
        button.innerText = "Abrir diálogo";

        return button;
    },
    argTypes: {},
    args: {},
};

export default meta;

type Story = StoryObj;

export const DialogStories: Story = {
    args: {},
};
