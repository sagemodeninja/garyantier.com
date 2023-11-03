import './view.php.scss';

class FiveStarRating {
    constructor(container: HTMLDivElement) {
        this.container = container;
        this.rating = parseInt(container.dataset.rating);
        
        this.render();
    }

    public container: any;
    public rating: number;
    
    render() {
        for(var idx = 1; idx <= 5; idx++) {
            const star = document.createElement('i');
            const starClass = star.classList;
            
            starClass.add('ms-Icon');
            starClass.add(idx <= this.rating ? 'ms-Icon--FavoriteStarFill' : 'ms-Icon--FavoriteStar');
            
            this.container.appendChild(star);
        }
    }
}

function addNavigateExternalIcon(anchor: HTMLAnchorElement) {
    const icon = document.createElement('span');
    const iconClass = icon.classList;
    
    iconClass.add('ms-Icon');
    iconClass.add('ms-Icon--NavigateExternalInline');
    
    anchor.innerText += '  ';
    anchor.appendChild(icon);
}

document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('a');
    const fiveStarRating = document.querySelectorAll('.five-star-rating') as NodeListOf<HTMLDivElement>;
    const certBadgeAz204 = document.querySelector('#az_204_cert_badge');

    anchors.forEach(anchor => {
        addNavigateExternalIcon(anchor);
    });
   
    
    fiveStarRating.forEach(rating => {
        new FiveStarRating(rating);
    });
    
    certBadgeAz204.addEventListener('click', e => {
       location.href = 'https://www.credly.com/badges/eeb6fe6c-3277-40d1-9505-a01380d054b2/public_url';
    });
});