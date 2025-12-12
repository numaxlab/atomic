import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
    title: "Molecules/Dropdown",
    tags: ["autodocs"],
    render: () => {
        const dropdown = document.createElement("div");

        dropdown.className = ["ml-dropdown"].join(" ");

        return dropdown;
    },
    argTypes: {
        label: { control: "text" },
    },
    args: {
        label: "Dropdown",
    },
};

export default meta;

type Story = StoryObj;

export const DropdownStories: Story = {
    args: {
        label: "Dropdown",
    },
};
