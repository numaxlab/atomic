import type { Meta, StoryObj } from "@storybook/html";

import variants from "./variants";

type TagArgs = {
    tag: string;
    variant: string;
    label: string;
};

const meta: Meta<TagArgs> = {
    title: "Atoms/Tag",
    tags: ["autodocs"],
    render: (args) => {
        const tag = document.createElement(args.tag);
        tag.innerText = args.label;

        if (args.tag === "a") {
            tag.setAttribute("href", "#");
        }

        tag.className = ["at-tag", args.variant].join(" ");

        return tag;
    },
    argTypes: {
        label: { control: "text" },
        tag: {
            control: { type: "select" },
            options: ["a", "span"],
        },
        variant: {
            control: { type: "select" },
            options: variants,
        },
    },
    args: {
        tag: "a",
        label: "tag",
    },
};

export default meta;

type Story = StoryObj<TagArgs>;

export const TagStories: Story = {
    args: {
        tag: "a",
        label: "Lorem ipsum",
        variant: "is-primary",
    },
};
