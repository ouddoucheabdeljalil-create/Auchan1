import { data , SetProduits } from "./storage.js";


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
function afficherProduitAdmin(){
    for(let i = 0 ; i < data.length ; i++){
        const tableau = document.createElement('tr')
        tableau.className = 'text-center'
        tableau.innerHTML = `<td >${i+1}</td>
                        <td class="flex justify-center"><img src="${data[i].img}" alt="" class="h-15"></td>
                        <td>${data[i].name}</td>
                        <td>${data[i].prix}</td>
                        <td>${data[i].categorie}</td>
                        <td>
                            <button class="bg-[#0D73e7]" h-12><img src="assest/stylus_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></button>
                            <button class="bg-red-500"><img src="assest/delete_24dp_FFF_FILL0_wght400_GRAD0_opsz24.svg" alt=""></button>
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

function ajouteProduit(){
    // const newData = JSON.parse(localStorage.getItem('produits')) || []
    btnAjouteNew.addEventListener('click', (e) => {
        e.preventDefault()
        const newProduit = {
        id: data.length+1,
        name : nameProduit.value ,
        prix : prixProduit.value ,
        categorie : catalogue1.value , 
        img : imgProduit.value,

    }
    data.push(newProduit)
    //   localStorage.setItem('produits', JSON.stringify(newData))
    SetProduits(data)
    })
   
   
    
    
}
ajouteProduit()

function deleteProduct(){
    
}