import type { Meta, StoryObj } from "@storybook/html";

type BlockquoteArgs = {
    label: string;
    footer: boolean;
    icon: boolean;
};

const meta: Meta<BlockquoteArgs> = {
    title: "Atoms/Blockquote",
    render: (args) => {
        const blockquote = document.createElement("blockquote");
        const icon = document.createElement("i");
        icon.setAttribute("aria-hidden", "true");
        icon.className = "blockquote-icon fa-solid fa-quote-left fa-2x text-primary";

        const className = ["at-blockquote"];
        if (args.icon) {
            className.push("has-icon");
        }

        if (args.footer) {
            const figure = document.createElement("figure");
            const figCaption = document.createElement("figcaption");

            figure.className = className.join(" ");

            blockquote.innerText = args.label;

            figCaption.className = "blockquote-footer";
            figCaption.innerText = "Pé da cita";

            if (args.icon) {
                figure.appendChild(icon);
            }
            figure.appendChild(blockquote);
            figure.appendChild(figCaption);

            return figure;
        }

        blockquote.className = className.join(" ");

        if (args.icon) {
            blockquote.appendChild(icon);
        }
        blockquote.append(args.label);

        return blockquote;
    },
    argTypes: {
        label: { control: "text" },
        footer: { control: "boolean" },
        icon: { control: "boolean" },
    },
    args: {
        label: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        footer: false,
        icon: true,
    },
};

export default meta;

type Story = StoryObj<BlockquoteArgs>;

export const Single: Story = {
    args: {
        label: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        footer: false,
        icon: true,
    },
};
