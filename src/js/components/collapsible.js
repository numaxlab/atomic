export default () => ({
    toggle () {
        const isExpanded = this.$el.getAttribute('aria-expanded') === 'true';
        const controlsTarget = this.$root.querySelector('#' + this.$el.getAttribute('aria-controls'));
        const icon = this.$el.querySelector('.collapsible-icon');

        if (isExpanded) {
            controlsTarget.setAttribute('hidden', true);
            this.$el.setAttribute('aria-expanded', false);
        } else {
            controlsTarget.removeAttribute('hidden');
            this.$el.setAttribute('aria-expanded', true);
        }

        if (icon) {
            const altIcon = icon.dataset.alt;

            icon.dataset.alt = Array.from(icon.classList).filter(cls => cls !== 'collapsible-icon').join(' ');
            icon.classList.remove(...Array.from(icon.classList).filter(cls => cls !== 'collapsible-icon'));
            icon.classList.add(...altIcon.split(' '));
        }
    },
});
