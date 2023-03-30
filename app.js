document.body.onload = function () {// fonction qui se declare au chargement de la page et qui prend les 2 variables ci-dessous
    nbr = 8; // La variable "nbr" est définie sur 8, ce qui signifie que le carrousel contiendra 8 éléments
    p = 0; //La variable "p" est initialisée à 0, ce qui signifie que le carrousel commencera au début
    container = document.getElementById('container');// on recupere le conteneur en utilisant son ID
    g = document.querySelector('.fa-chevron-left');//on utilise la methode querySelector pour recuperer les 2 icones et les stocker
    d = document.querySelector('.fa-chevron-right');
    container.style.width = (190 * nbr) + "px"; // on defini la largeur du conteneur avec la propriété style.width en multipliant la taille de l'img (190px) au nombre d'elements (8)
}

g.onclick = function () { // cette fonctione est liée a l'icone gauche
    if (p > -nbr + 1)//      on verifie si la position du carrousel est superieur a la valeur max autorisé (le nbr d'element du carrousel)
        p--;//               si oui diminue la position de 1 (donc ce deplace vers la gauche)
    else
        p = 0;//             si ça valeur et egale à 0 on met à jour la position en utilisant la proprieté transform  (qui a pour effet donner une impression de carrousel infini)
    container.style.transform = 'translate(' + p * 190 + 'px)';
    container.style.transition = "all 1s ease";// la propriété translate permet d'ajouter une animation plus fluide
}

d.onclick = function () {// cette fonctione est liée a l'icone droit
    if (p < 0)//            on verifie si la position du carrousel est inferieurà 0 si oui ou incremente(augmente) la position de 1
        p++;
    else//                  sinon elle réinitialise la position à la valeur maximale autorisée
        p = -nbr + 1;
    container.style.transform = 'translate(' + p * 190 + 'px)';
    container.style.transition = "all 1s ease";
}
//////////////////////////////////////////////////////////////////

// Créer la fenêtre modale
const modal = document.createElement('div');// on crée unu div qui a pour constante modal
modal.classList.add('modal');//on lui donne une classe .modal
modal.style.display = 'none';// on lui mais la proprieté display none pour masquer la fenetre

// on Créer l'image et la description grace a la methode "createElement"
const image = document.createElement('img');
const description = document.createElement('p');

// on ajoute l'image et la description à la fenêtre modale grace a la methode "appenchild"
modal.appendChild(image);
modal.appendChild(description);

// Ajouter la fenêtre modale à la page
document.body.appendChild(modal);

// on ajoute un événement de clic pour fermer la fenêtre modale lorsque l'utilisateur click dessus grace a la methode "addEventListener"
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// on écupére tous les boutons "Get more info" grace a la methode querySelectorAll et on les stock dans une variable "buttons"
const buttons = document.querySelectorAll('.card button');
console.log(buttons);

// Pour chaque bouton, un événement de clic est ajouté
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Trouver l'index de l'élément de bouton actuel et met à jour l'image et la description de la fenêtre modale en fonction de l'index du bouton cliqué.
    const index = Array.from(buttons).indexOf(button);

    //la source de l'image est définie en fonction de l'index 
    image.src = `./img/img${index + 1}.jpg`;
    description.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus sit dolorum aliquam, est ab similique praesentium totam deserunt excepturi.`;// la description de la fenêtre modale et une chaine de charactere

    // Afficher la fenêtre modale
    modal.style.display = 'block';
  });
});
