import type { Meta, StoryObj } from '@storybook/html'

type TypographyArgs = {};

const meta: Meta<TypographyArgs> = {
  title: 'Base/Tipografía',
  render: () => {
    const div = document.createElement('div')
    div.innerHTML =
      '<p>This line of text is rendered as a regular paragraph.</p>' +
      '<p>You can use the mark tag to <mark>highlight</mark> text.</p>' +
      '<p><del>This line of text is meant to be treated as deleted text.</del></p>' +
      '<p><s>This line of text is meant to be treated as no longer accurate.</s></p>' +
      '<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>' +
      '<p><u>This line of text will render as underlined.</u></p>' +
      '<p><small>This line of text is meant to be treated as fine print.</small></p>' +
      '<p><strong>This line rendered as bold text.</strong></p>' +
      '<p><em>This line rendered as italicized text.</em></p>' +
      '<p>You can use the abbr tag to abbreviations and acronyms: <abbr title="attribute">attr</abbr>.</p>' +
      '<hr>' +
      '<ul>\n' +
      '  <li>This is a list.</li>\n' +
      '  <li>Second element.</li>\n' +
      '  <li>Third element.</li>\n' +
      '</ul>'

    return div
  },
  argTypes: {},
  args: {},
}

export default meta

type Story = StoryObj<TypographyArgs>;

export const Single: Story = {
  args: {},
}
