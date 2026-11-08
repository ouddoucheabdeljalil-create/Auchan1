import { data, SetProduits } from "./storage.js";


// let image = document.getElementById('imgProduit');
// let preview = document.getElementById("preview");

// image.addEventListener("change", function() {

//     let file = image.files[data];

//     let reader = new FileReader();

//     reader.onload = function() {
//         preview.src = reader.result;
//     };

//     reader.readAsDataURL(file);

// });

const tbody = document.querySelector('#tbody')
function afficherProduitAdmin() {
    for (let i = 0; i < data.length; i++) {
        const tableau = document.createElement('tr')
        tableau.className = 'text-center'
        tableau.innerHTML = `<td >${i + 1}</td>
                        <td class="flex justify-center"><img src="${data[i].img}" alt="" class="h-15"></td>
                        <td>${data[i].name}</td>
                        <td>${data[i].prix}</td>
                        <td>${data[i].categorie}</td>
                        <td ">
                            <button data-id="${data[i].id}" id="modifier${data[i].id}" class=" bg-[#0D73e7]  h-10  ">modifier</button>
                            <button data-id="${data[i].id}" id="supreme${data[i].id}" class=" bg-red-500 h-10 ">supreme</button>
                        </td>`
        tbody.appendChild(tableau)
    }
}
afficherProduitAdmin()

const imgProduit = document.getElementById('imgProduit')
const nameProduit = document.getElementById('nameProduit')
const prixProduit = document.getElementById('prixProduit')
const catalogue1 = document.getElementById('catalogue1')
const btnAjouteNew = document.getElementById('btnAjouteNew')

function ajouteProduit() {
    // const newData = JSON.parse(localStorage.getItem('produits')) || []
    btnAjouteNew.addEventListener('click', (e) => {
        e.preventDefault()
        const newProduit = {
            id: data.length + 1,
            name: nameProduit.value,
            prix: prixProduit.value,
            categorie: catalogue1.value,
            img: imgProduit.value,

        }
        data.push(newProduit)
        //   localStorage.setItem('produits', JSON.stringify(newData))
        SetProduits(data)
    })




}
ajouteProduit()

function deleteProduct() {

    tbody.addEventListener('click', (e) => {
        const supreme = document.querySelector(`#supreme${e.target.dataset.id}`)
        if (e.target === supreme) {
            let test = data.filter(p => p.id != e.target.dataset.id)
            console.log(test)
            SetProduits(test)
        }
    })
}
deleteProduct()
const folmulaire = document.getElementById('folmulaire')
const modName = document.getElementById('modifProduit')
const modSelect = document.getElementById('Modcatalogue1')
const modPrix = document.getElementById('modPrixProduit')
const btnModifier = document.getElementById('btnAjouteNew')
function modifierProduit() {
    tbody.addEventListener('click', (e) => {
        const modifier = document.querySelector(`#modifier${e.target.dataset.id}`)
        if (e.target === modifier) {
            let id = e.target.dataset.id
            folmulaire.classList.toggle("hidden")
           
           



            

            folmulaire.addEventListener('submit', (e) => {
                e.preventDefault()
                 data.forEach(element => {
                if (element.id === Number(id)) {
                    console.log(element , "dddd")
                    element.name = modName.value;
                    element.categorie = modSelect.value;
                    element.prix = modPrix.value;
                    
                }
               
            });
             console.log(data)
            console.log(modName.value)
            SetProduits(data)
                folmulaire.classList.add("hidden")
            })


        }
    })
}
modifierProduit()