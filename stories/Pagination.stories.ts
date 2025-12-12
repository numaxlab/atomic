import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
    title: "Molecules/Pagination",
    render: () => {
        const pagination = document.createElement("nav");
        const ul = document.createElement("ul");

        pagination.className = ["ml-pagination"].join(" ");
        pagination.ariaLabel = "Paxinación dos resultados da busca";

        ul.className = "pagination";

        const prevLi = document.createElement("li");
        const prevA = document.createElement("a");

        prevA.innerText = "Anterior";
        prevA.className = "page-link";
        prevLi.className = "page-item disabled";

        prevLi.appendChild(prevA);
        ul.appendChild(prevLi);

        for (let i = 1; i <= 5; i++) {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.innerText = i.toString();
            a.className = "page-link";
            li.className = "page-item";

            if (i === 1) {
                li.className += " active";
                li.ariaCurrent = "page";
            } else {
                a.href = "#";
            }

            li.appendChild(a);
            ul.appendChild(li);
        }

        const nextLi = document.createElement("li");
        const nextA = document.createElement("a");

        nextA.innerText = "Seguinte";
        nextA.className = "page-link";
        nextA.href = "#";
        nextLi.className = "page-item";

        nextLi.appendChild(nextA);
        ul.appendChild(nextLi);

        pagination.appendChild(ul);

        return pagination;
    },
    argTypes: {},
    args: {},
};

export default meta;

type Story = StoryObj;

export const Single: Story = {
    args: {},
};
