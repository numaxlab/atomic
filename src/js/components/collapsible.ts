import { AlpineComponent } from "alpinejs";

interface CollapsibleComponent {
    toggle(): void;
}

export default (): AlpineComponent<CollapsibleComponent> => ({
    toggle(): void {
        const isExpanded = this.$el.getAttribute("aria-expanded") === "true";
        const controlsTarget = this.$root.querySelector(
            `#${this.$el.getAttribute("aria-controls")}`,
        );
        const icon = this.$el.querySelector(".collapsible-icon") as HTMLElement | null;

        if (!controlsTarget) {
            console.error("Collapsible component: No target found for aria-controls value.");

            return;
        }

        if (!icon) {
            console.error('Collapsible component: No icon found with class "collapsible-icon".');

            return;
        }

        if (isExpanded) {
            controlsTarget.setAttribute("hidden", "true");
            this.$el.setAttribute("aria-expanded", "false");
        } else {
            controlsTarget.removeAttribute("hidden");
            this.$el.setAttribute("aria-expanded", "true");
        }

        const altIcon = icon.dataset.alt;

        if (altIcon) {
            icon.dataset.alt = Array.from(icon.classList)
                .filter((cls) => cls !== "collapsible-icon")
                .join(" ");
            icon.classList.remove(
                ...Array.from(icon.classList).filter((cls) => cls !== "collapsible-icon"),
            );
            icon.classList.add(...altIcon.split(" "));
        }
    },
});
