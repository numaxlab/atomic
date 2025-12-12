import type { Meta, StoryObj } from "@storybook/html";

import variants from "./variants";

type AlertArgs = {
    variant: string;
    label: string;
};

const meta: Meta<AlertArgs> = {
    title: "Molecules/Alert",
    tags: ["autodocs"],
    render: (args) => {
        const alert = document.createElement("div");

        alert.role = "alert";
        alert.className = ["ml-alert", args.variant].join(" ");
        alert.innerHTML = args.label;

        return alert;
    },
    argTypes: {
        label: { control: "text" },
        variant: {
            control: { type: "select" },
            options: variants,
        },
    },
    args: {
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
};

export default meta;

type Story = StoryObj<AlertArgs>;

export const AlertStories: Story = {
    args: {
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        variant: "is-primary",
    },
};
