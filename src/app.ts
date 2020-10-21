import {Invoice} from './classes/Invoice.js';
 import {Payment} from './classes/Payment.js';
 import {HasFormatter} from './interfaces/HasFormatter.js';




// Form
const siteForm = document.querySelector('.new-item-form') as HTMLFontElement;

// Input value
const type = document.querySelector('#type') as HTMLSelectElement;  
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;  
const detail = document.querySelector('#details') as HTMLInputElement;  
const amount = document.querySelector('#amount') as HTMLInputElement;  




siteForm.addEventListener('submit', (e: Event) => {

    e.preventDefault();

})