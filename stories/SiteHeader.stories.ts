import type { Meta, StoryObj } from "@storybook/html";

type SiteHeaderArgs = {
    brand: string;
};

const meta: Meta<SiteHeaderArgs> = {
    title: "Organisms/Site Header",
    tags: ["autodocs"],
    render: (args) => {
        const siteHeader = document.createElement("header");
        const brandLink = document.createElement("a");
        const navToggle = document.createElement("button");
        const nav = document.createElement("nav");
        const langSwitcher = document.createElement("ul");
        const mainMenu = document.createElement("ul");

        brandLink.innerText = args.brand;
        brandLink.className = "text-xl font-bold";

        navToggle.className = "site-header-nav-toggle";
        navToggle.ariaLabel = "Toggle navigation";
        navToggle.innerHTML = `
            <i class="fa-solid fa-bars" aria-hidden="true"></i>
        `;

        siteHeader.className = ["org-site-header"].join(" ");
        nav.className = "site-header-nav";
        mainMenu.className = "site-header-main-menu";

        langSwitcher.className = "ml-lang-switcher";
        langSwitcher.innerHTML = `
            <li><a href="#">GL</a></li>
            <li><a href="#">ES</a></li>
            <li><a href="#">EN</a></li>
        `;

        mainMenu.innerHTML = `
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Proxectos</a></li>
            <li><a href="#">Contacto</a></li>
        `;

        nav.appendChild(langSwitcher);
        nav.appendChild(mainMenu);

        siteHeader.appendChild(brandLink);
        siteHeader.appendChild(navToggle);
        siteHeader.appendChild(nav);

        return siteHeader;
    },
    argTypes: {
        brand: { control: "text" },
    },
    args: {
        brand: "Laboratorio NUMAX",
    },
};

export default meta;

type Story = StoryObj<SiteHeaderArgs>;

export const SiteHeaderStories: Story = {
    args: {
        brand: "Laboratorio NUMAX",
    },
};
