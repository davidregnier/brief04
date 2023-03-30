document.body.onload = function () {// fonction qui se déclare au chargement de la page et qui prend les 2 variables ci-dessous
    nbr = 8; // La variable "nbr" est définie sur 8, ce qui signifie que le carrousel contiendra 8 éléments
    p = 0; //La variable "p" est initialisée à 0, ce qui signifie que le carrousel commencera au début
    container = document.getElementById('container');// on récupère le conteneur en utilisant son ID
    g = document.querySelector('.fa-chevron-left');//on utilise la méthode querySelector pour récupérer les 2 icônes et les stocker
    d = document.querySelector('.fa-chevron-right');
    container.style.width = (190 * nbr) + "px"; // on définit la largeur du conteneur avec la propriété style.width en multipliant la taille de l'img (190px) au nombre d'éléments (8)
}

g.onclick = function () { // cette fonction est liée à l'icône gauche
    if (p > -nbr + 1)//      on vérifie si la position du carrousel est supérieure à la valeur max autorisée (le nbr d'éléments du carrousel)
        p--;//               si oui diminue la position de 1 (donc se déplace vers la gauche)
    else
        p = 0;//             si sa valeur est egale à 0 on met à jour la position en utilisant la proprieté transform  (qui a pour effet donner une impression de carrousel infini)
    container.style.transform = 'translate(' + p * 190 + 'px)';
    container.style.transition = "all 1s ease";// la propriété translate permet d'ajouter une animation plus fluide
}

d.onclick = function () {// cette fonction est liée à l'icône droit
    if (p < 0)//            on vérifie si la position du carrousel est inférieure à 0 si oui on incrémente(augmente) la position de 1
        p++;
    else//                  sinon elle réinitialise la position à la valeur maximale autorisée
        p = -nbr + 1;
    container.style.transform = 'translate(' + p * 190 + 'px)';
    container.style.transition = "all 1s ease";
}
//////////////////////////////////////////////////////////////////

// Créer la fenêtre modale
const modal = document.createElement('div');// on crée une div qui a pour constante modal
modal.classList.add('modal');//on lui donne une classe .modal
modal.style.display = 'none';// on lui met la proprieté display none pour masquer la fenêtre

// on Créé l'image et la description grâce à la méthode "createElement"
const image = document.createElement('img');
const description = document.createElement('p');

// on ajoute l'image et la description à la fenêtre modal grâce à la méthode "appenchild"  qui permet d'ajouter un nouvel élément enfant à un élément parent existant.
modal.appendChild(image);
modal.appendChild(description);

// Ajouter la fenêtre modal à la page
document.body.appendChild(modal);

// on ajoute un évènement de clic pour fermer la fenêtre modal lorsque l'utilisateur click dessus grace a la methode "addEventListener"
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
