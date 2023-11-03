class NavigationComponent{
    constructor(link){
        this.link = link;
        this.page = null;
    }
}

class Navigation {
    constructor(){
        this.components = {};
        this.activeLink = document.querySelector(".navigation_links.active");
        this.activePage = document.querySelector(".layout_pages.active");;
        this.registerLinks();
        this.registerPages();
    }

    registerLinks(){
        var links = document.querySelectorAll(".navigation_links");
        links.forEach(link=>{
            let index = link.getAttribute("data-index");
            this.components[index] = new NavigationComponent(link);

            link.addEventListener("click", e=>{
                this.navigate(index);
            });
        });
    }

    registerPages(){
        var pages = document.querySelectorAll(".layout_pages");
        pages.forEach(page=>{
            let index = page.getAttribute("data-index");
            this.components[index].page = page;
        });
    }

    navigate(index) {
        if(index === "" || index === null || index === undefined)
            return;

        index = index.replace("#", "");

        let comp = this.components[index];
        this.activeLink.classList.remove("active");
        this.activePage.classList.remove("active");
        comp.link.classList.add("active");
        comp.page.classList.add("active");
        this.activeLink = comp.link;
        this.activePage = comp.page;
    }
}

$(document).ready(()=>{
    var nav = new Navigation();
    nav.navigate(window.location.hash);

    var button_hi = $("#button_hi");
    button_hi.click(()=>{
        let email = prompt("Email Address (optional)");
        if(email) {
            $.ajax({
                url: "dependencies/say_hi/index.php",
                method: "POST",
                data: { email: email },
                dataType: "JSON",
                success: (result)=>{
                    console.log(result);
                    if(result.status == "success") {
                        alert(`Hello ${email}`);
                    } else {
                        alert("Can't reach my end :3");
                    }
                }
            });   
        }
    });
});