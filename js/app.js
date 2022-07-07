//1. Je crée mon module accordéon
var accordeon = {

    // J'aurai besoin de deux fonctions: 1. l'initialisation et 2. l'action suivant le Click
    init: function() {

        // Je crée ma constante titreH2 pour la sortir de la fonction
        const accordionItems = document.querySelectorAll('.accordion-item')

        // J'annonce une boucle forEach qui sélectionnera chaque titre à le fois
        accordionItems.forEach(item => {
            let itemToggle = item.querySelector('.accordion-toggle')
            let itemContent = item.querySelector('.accordion-content')
            let itemText = item.querySelector('.accordion-text')
            let itemContentHeight = itemText.offsetHeight
            // Je place mon espion 
            itemToggle.addEventListener('click', function () {
                if (item.classList.contains('accordion-item-active')) {
                    itemContent.style.height = 0
                    item.classList.remove('accordion-item-active')
                } else {
                    accordionItems.forEach(subItem => {
                        let itemContent = subItem.querySelector('.accordion-content')
                        itemContent.style.height = 0
                        subItem.classList.remove('accordion-item-active')
                    })
                    itemContent.style.height = `${itemContentHeight}px`
                    item.classList.add('accordion-item-active')
                }
            })
        })

    },
}

accordeon.init();

/* Ôtre possibilité pour optimiser un maximum - Merci Yoann et Arslanne:

const menu = {
    h2Liste: document.querySelectorAll(".titre"),
    arrowListe: document.querySelectorAll(".arrow"),
    init: function () {
        for (h2Elmt of menu.h2Liste) {
            h2Elmt.addEventListener("click", menu.handleClick);
        }
    },
    handleClick: function (e) {
        const h2Elmt = e.currentTarget;
        const arrowClass = h2Elmt.querySelector('.arrow')
        menu.changeClass(h2Elmt, menu.h2Liste, "open");
        menu.changeClass(arrowClass, menu.arrowListe, "rotation");
    },
    changeClass: function (paraElmt, listElmt, classCss) {
        for (let h2Elmts of listElmt) {
            h2Elmts.classList.remove(`${classCss}`);
        }
        paraElmt.classList.add(`${classCss}`);
    },
};
menu.init();
*/
