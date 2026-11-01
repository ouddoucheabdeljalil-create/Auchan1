import { AfficherProduit } from "./ui.js";
import { data} from "./storage.js";
const itemsPerPage = 8 ;
let correntPage = 1;
let currentFilter = "";
export const produitE1 = document.getElementById('prouduit');
export const pagenation = document.getElementById('pagenation');
const filter = document.getElementById('search');

filter.addEventListener('input', e => {
    currentFilter = e.target.value.toLowerCase();
    correntPage = 1;
    render();
});

export function render(){
    
    const filtered = data.filter(p => p.name.toLowerCase().includes(currentFilter));
    const start = (correntPage - 1) * itemsPerPage;
    const pageItems = filtered.slice(start, start + itemsPerPage);
    console.log(pageItems)
  
    produitE1.innerHTML ='';
    AfficherProduit(pageItems);

pagenation.innerHTML = '';
const pages = Math.ceil(filtered.length / itemsPerPage);
for (let i = 1; i <= pages; i++) {
        const btn = document.createElement('button');
        btn.classList = (' mt-0 border rounded-xl   h-auto w-15 bg-')
        btn.textContent = i;
        if (i === correntPage){
             btn.disabled = true; 
            btn.classList.add('bg-[#4338CA]')
            }
        btn.addEventListener('click', () => { correntPage = i; render(); });
        pagenation.appendChild(btn);
//            pagenation.addEventListener('click', (e) =>{
//     if(e.target.tagName === 'BUTTON'){
//         if (i === correntPage){
//         btn.classList.add('bg-yellow-500') 
//         console.log('hhhhhhhh')}
//     }
// })
    }
 
}