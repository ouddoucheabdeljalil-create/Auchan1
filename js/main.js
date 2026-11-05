import {fetchingData } from "./api.js";
import { data } from "./storage.js";
import { render, itmesPage , search } from "./products.js";
import { test , gereePanier} from "./carts.js";

const pageNumber = document.getElementById('select')
const produitE1 = document.querySelector('#catalogue');
const pagenation = document.getElementById('pagenation');
const searche = document.getElementById('search');

render(produitE1,pagenation) 
itmesPage(produitE1 ,pageNumber)
search(searche )
fetchingData()

gereePanier()

