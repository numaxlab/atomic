import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = {
    title: "Base/Tipografía",
    render: () => {
        const div = document.createElement("div");
        div.innerHTML =
            "<p>Esta liña é un parágrafo normal.</p>" +
            "<p>Podes empregar a etiqueta <code>mark</code> para <mark>destacar</mark> texto.</p>" +
            "<p><del>Esta liña é tratada coma un texto eliminado.</del></p>" +
            "<p><s>Esta liña é tratada coma un texto que xa non é certeiro ou riguroso.</s></p>" +
            "<p><ins>Esta liña é tratada coma un texto engadido ao documento.</ins></p>" +
            "<p><u>Esta liña está subliñada.</u></p>" +
            "<p><small>Esta liña é tratada como un texto como letra pequena.</small></p>" +
            "<p><strong>Esta liña é tratada coma un texto que ten importancia (e vese en negriña).</strong></p>" +
            "<p><em>Esta liña é tratada coma un texto con énfase (e vese en cursiva).</em></p>" +
            '<p>Podes empregar a ediqueta <code>abbr</code> para abreviaturas e acrónimos: <abbr title="Mozilla Developer Network">MDN</abbr>.</p>' +
            '<hr class="my-3">' +
            '<ul class="list-disc pl-4">\n' +
            "  <li>Isto é unha lista.</li>\n" +
            "  <li>Segundo elemento.</li>\n" +
            "  <li>Terceiro elemento.</li>\n" +
            "</ul>";

        return div;
    },
    argTypes: {},
    args: {},
};

export default meta;

type Story = StoryObj;

export const Single: Story = {
    args: {},
};
