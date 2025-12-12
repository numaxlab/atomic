import type { Meta, StoryObj } from "@storybook/html";

type SiteFooterArgs = {
    brand: string;
};

const meta: Meta<SiteFooterArgs> = {
    title: "Organisms/Site Footer",
    tags: ["autodocs"],
    render: (args) => {
        const siteFooter = document.createElement("footer");
        const leftWrapper = document.createElement("div");
        const rightWrapper = document.createElement("div");
        const brandLink = document.createElement("a");
        const mainMenu = document.createElement("ul");
        const secondaryMenu = document.createElement("ul");
        const socialMenu = document.createElement("ul");

        brandLink.innerText = args.brand;
        brandLink.className = "block text-xl font-bold mb-5";

        mainMenu.className = "text-sm mb-5";
        mainMenu.innerHTML = `
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Proxectos</a></li>
            <li><a href="#">Contacto</a></li>
        `;

        secondaryMenu.className = "text-sm mb-5";
        secondaryMenu.innerHTML = `
            <li><a href="#">Política de cookies</a></li>
            <li><a href="#">Política de privacidade</a></li>
        `;

        socialMenu.className = "flex gap-5";
        socialMenu.innerHTML = `
            <li>
                <a href="#" aria-label="O noso perfil en Instagram">
                    <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#" aria-label="O noso perfil en Bluesky">
                    <i class="fa-brands fa-bluesky" aria-hidden="true"></i>
                </a>
            </li>
            <li>
                <a href="#" aria-label="O noso perfil en Mastodon">
                    <i class="fa-brands fa-mastodon" aria-hidden="true"></i>
                </a>
            </li>
        `;

        siteFooter.className = ["org-site-footer"].join(" ");

        leftWrapper.className = "lg:w-1/3 lg:flex lg:justify-between";
        leftWrapper.appendChild(brandLink);
        leftWrapper.appendChild(mainMenu);

        rightWrapper.appendChild(secondaryMenu);
        rightWrapper.appendChild(socialMenu);

        siteFooter.appendChild(leftWrapper);
        siteFooter.appendChild(rightWrapper);

        return siteFooter;
    },
    argTypes: {
        brand: { control: "text" },
    },
    args: {
        brand: "Laboratorio NUMAX",
    },
};

export default meta;

type Story = StoryObj<SiteFooterArgs>;

export const SiteFooterStories: Story = {
    args: {
        brand: "Laboratorio NUMAX",
    },
};
