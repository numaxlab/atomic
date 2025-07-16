import type {Meta, StoryObj} from '@storybook/html'

type AccordionArgs = {};

const meta: Meta<AccordionArgs> = {
    title: 'Organisms/Accordion',
    tags: ['autodocs'],
    render: (args) => {
        const accordion = document.createElement('div');

        accordion.className = ['org-accordion'].join(' ');
        accordion.setAttribute('x-data', 'collapsible');

        for (let i = 0; i < 3; i++) {
            let accordionHeader = document.createElement('h3');
            let accordionPanel = document.createElement('div');
            let accordionControl = document.createElement('button');

            accordionHeader.className = 'accordion-header';
            accordionPanel.className = 'accordion-panel';
            accordionPanel.id = `accordionPanel${i}`;
            accordionPanel.role = 'region';
            accordionPanel.setAttribute('aria-labelledby', `accordionHeader${i}`);
            accordionPanel.hidden = true;

            accordionControl.type = 'button';
            accordionControl.id = `accordionHeader${i}`;
            accordionControl.ariaExpanded = 'false';
            accordionControl.className = 'accordion-control';
            accordionControl.setAttribute('aria-controls', `accordionPanel${i}`);
            accordionControl.setAttribute('x-on:click', 'toggle');

            accordionControl.innerHTML = `
                Item ${i}
                <i class="collapsible-icon fa-solid fa-caret-down" data-alt="fa-solid fa-caret-up" aria-hidden="true"></i>
            `;

            accordionPanel.innerHTML = `
                <p>Este é o contido do item ${i} do acordeón.</p>
            `;

            accordionHeader.appendChild(accordionControl);
            accordion.appendChild(accordionHeader);
            accordion.appendChild(accordionPanel);
        }

        return accordion;
    },
    argTypes: {},
    args: {},
}

export default meta

type Story = StoryObj<AccordionArgs>;

export const AccordionStories: Story = {
    args: {},
}
