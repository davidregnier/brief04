document.body.onload = function () {
    nbr = 8;
    p = 0;
    container = document.getElementById('container');
    g = document.querySelector('.fa-chevron-left');
    d = document.querySelector('.fa-chevron-right');
    container.style.width = (190 * nbr) + "px";
}

g.onclick = function () {
    if (p > -nbr + 1)
        p--;
    else
        p = 0;
    container.style.transform = 'translate(' + p * 190 + 'px)';
    container.style.transition = "all 0.5s ease";
}

d.onclick = function () {
    if (p < 0)
        p++;
    else
        p = -nbr + 1;
    container.style.transform = 'translate(' + p * 190 + 'px)';
    container.style.transition = "all 0.5s ease";
}
//////////////////////////////////////////////////////////////////

// Créer la fenêtre modale
const modal = document.createElement('div');
modal.classList.add('modal');
modal.style.display = 'none';

// Créer l'image et la description
const image = document.createElement('img');
const description = document.createElement('p');

// Ajouter l'image et la description à la fenêtre modale
modal.appendChild(image);
modal.appendChild(description);

// Ajouter la fenêtre modale à la page
document.body.appendChild(modal);

// Ajouter un événement de clic pour fermer la fenêtre modale
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Récupérer tous les boutons "Get more info"
const buttons = document.querySelectorAll('.card button');
console.log(buttons);

// Ajouter un événement de clic à chaque bouton
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Trouver l'index de l'élément de bouton actuel
    const index = Array.from(buttons).indexOf(button);

    // Mettre à jour l'image et la description de la fenêtre modale
    image.src = `./img/img${index + 1}.jpg`;
    description.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus sit dolorum aliquam, est ab similique praesentium totam deserunt excepturi.`;

    // Afficher la fenêtre modale
    modal.style.display = 'block';
  });
});
