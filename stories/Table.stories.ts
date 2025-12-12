import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
    title: "Molecules/Table",
    tags: ["autodocs"],
    render: () => {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        const tfoot = document.createElement("tfoot");

        table.className = ["ml-table"].join(" ");

        thead.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Cantidade</th>
        <th>Etiquetas</th>
      </tr>
    `;

        for (let i = 0; i < 4; i++) {
            tbody.innerHTML += `
              <tr>
                <td>${i}</td>
                <td>Nome Apelido Apelido</td>
                <td>22.35 &euro;</td>
                <td>
                    <span class="at-tag is-primary">Etiqueta 1</span>
                    <span class="at-tag is-secondary">Etiqueta 2</span>
                </td>
              </tr>
            `;
        }

        table.appendChild(thead);
        table.appendChild(tbody);
        table.appendChild(tfoot);

        return table;
    },
    argTypes: {
        caption: { control: "text" },
    },
    args: {
        caption: "Table",
    },
};

export default meta;

type Story = StoryObj;

export const TableStories: Story = {
    args: {
        caption: "Table",
    },
};
