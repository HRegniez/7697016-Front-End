/**************************************Recuperation des donnees */
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

/**************************************Creer article */
const article = pieces[0];

const imageElement = document.createElement('img');
const nomElement = document.createElement('h2');
const prixElement = document.createElement('p');
const categorieElement = document.createElement('p');
const descriptionElement = document.createElement('p');
const disponibiliteElement = document.createElement('p');

imageElement.src = article.image;
nomElement.innerText = article.nom;
prixElement.innerText = `Prix: ${article.prix} (${article.prix < 35 ? "€" : "€€"})`;
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
descriptionElement.innerText = article.description ?? "(Pas description pour le moment)";
disponibiliteElement.innerText = `${article.disponibilite === 'oui' ? "En stock" : "Rupture de stock"}`;

/***************************************rattachement au DOM */

const sectionFiches = document.querySelector(".fiches");

sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);