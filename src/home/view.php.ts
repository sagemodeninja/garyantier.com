// Some shit!

import './view.php.scss';

class NavigationComponent{
    constructor(link: HTMLAnchorElement) {
        this.link = link;
        this.page = null;
    }

    public link: HTMLAnchorElement;
    public page: HTMLDivElement;
}

class Navigation {
    constructor(){
        this.components = {};
        this.activeLink = document.querySelector('.navigation_links.active');
        this.activePage = document.querySelector('.layout_pages.active');

        this.registerLinks();
        this.registerPages();
    }

    public components: { [key: string]: NavigationComponent };
    public activeLink: HTMLAnchorElement;
    public activePage: HTMLDivElement;

    registerLinks() {
        const links = document.querySelectorAll('.navigation_links') as NodeListOf<HTMLAnchorElement>;

        links.forEach(link => {
            const index = link.dataset.index;

            this.components[index] = new NavigationComponent(link);

            link.addEventListener('click', () => this.navigate(index));
        });
    }

    registerPages() {
        const pages = document.querySelectorAll('.layout_pages') as NodeListOf<HTMLDivElement>;

        pages.forEach(page => {
            const index = page.dataset.index;
            this.components[index].page = page;
        })
    }

    navigate(index: string) {
        if(!index || index === '')
            return;

        index = index.replace('#', '');

        const { link, page } = this.components[index];

        this.activeLink.classList.remove('active');
        this.activePage.classList.remove('active');

        link.classList.add('active');
        page.classList.add('active');

        this.activeLink = link;
        this.activePage = page;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const navigation = new Navigation();
    navigation.navigate(window.location.hash);
})