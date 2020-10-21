import {Invoice} from './classes/Invoice.js';
import {Payment} from './classes/Payment.js';
import { TemplateItem } from './classes/TemplateItem.js';
import {HasFormatter} from './interfaces/HasFormatter.js';


// Form
const siteForm = document.querySelector('.new-item-form') as HTMLFontElement;

// Input value
const type = document.querySelector('#type') as HTMLSelectElement;  
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;  
const detail = document.querySelector('#details') as HTMLInputElement;  
const amount = document.querySelector('#amount') as HTMLInputElement;  


// list instance
const ul = document.querySelector('.item-list') as HTMLUListElement;
const tempItem = new TemplateItem(ul);

siteForm.addEventListener('submit', (e: Event) => {

    e.preventDefault();

    let item: HasFormatter;
    if(type.value === 'invoice'){
        item = new Invoice(toFrom.value,detail.value,amount.valueAsNumber)
    }
    else{
        item = new Payment(toFrom.value,detail.value,amount.valueAsNumber)
    }

    tempItem.render(item,type.value,'end');

});