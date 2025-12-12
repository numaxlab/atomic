import type { AlpineComponent } from "alpinejs";

interface LineClampComponent {
    showMore: boolean;
}

export default (): AlpineComponent<LineClampComponent> => ({
    showMore: false,

    init() {
        this.$nextTick(() => {
            if (this.$refs.description.scrollHeight === this.$refs.description.clientHeight) {
                this.showMore = true;
            }
        }).catch((error) => {
            console.error("LineClamp component: Error during initialization.", error);
        });
    },
});
