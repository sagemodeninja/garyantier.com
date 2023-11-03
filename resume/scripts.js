class FiveStarRating {
    constructor(container) {
        this.container = container;
        this.rating = container.getAttribute('data-rating');
        
        this.render();
    }
    
    render() {
        for(var idx = 1; idx <= 5; idx++) {
            let star = document.createElement('i');
            let starClass = star.classList;
            
            starClass.add('ms-Icon');
            starClass.add(idx <= this.rating ? 'ms-Icon--FavoriteStarFill' : 'ms-Icon--FavoriteStar');
            
            this.container.appendChild(star);
        }
    }
}

function addNavigateExternalIcon(anchor) {
    let icon = document.createElement('span');
    let iconClass = icon.classList;
    
    iconClass.add('ms-Icon');
    iconClass.add('ms-Icon--NavigateExternalInline');
    
    anchor.innerText += '  ';
    anchor.appendChild(icon);
}

document.addEventListener('DOMContentLoaded', e => {
    var anchors = document.querySelectorAll('a');
    anchors.forEach(anchor => {
        addNavigateExternalIcon(anchor);
    });
   
    var fiveStarRating = document.querySelectorAll('.five-star-rating');
    fiveStarRating.forEach(rating => {
        new FiveStarRating(rating);
    });
    
    var certBadgeAz204 = document.querySelector('#az_204_cert_badge');
    certBadgeAz204.addEventListener('click', e => {
       location.href = "https://www.credly.com/badges/eeb6fe6c-3277-40d1-9505-a01380d054b2/public_url";
    });
});