import type { Meta, StoryObj } from "@storybook/html";

type BreadcrumbArgs = {
    items: number;
    tag: string;
};

const meta: Meta<BreadcrumbArgs> = {
    title: "Molecules/Breadcrumb",
    render: (args) => {
        const breadcrumb = document.createElement("nav");
        const ol = document.createElement("ol");

        breadcrumb.className = ["ml-breadcrumb"].join(" ");
        breadcrumb.ariaLabel = "Miga de pan";

        for (let i = 1; i <= args.items; i++) {
            const li = document.createElement("li");
            const tag = document.createElement(args.tag);
            if (args.tag === "a") {
                tag.setAttribute("href", "#");

                if (i === args.items) {
                    tag.ariaCurrent = "page";
                }
            }
            tag.innerText = `Item ${i}`;

            li.appendChild(tag);

            ol.appendChild(li);
        }

        breadcrumb.appendChild(ol);

        return breadcrumb;
    },
    argTypes: {
        items: {
            control: { type: "number", min: 1, max: 5, step: 1 },
        },
        tag: {
            control: { type: "select" },
            options: ["a", "span"],
        },
    },
    args: {
        tag: "a",
        items: 2,
    },
};

export default meta;

type Story = StoryObj<BreadcrumbArgs>;

export const Single: Story = {
    args: {
        items: 2,
    },
};
