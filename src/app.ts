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

    // Tuples for destructure into object
    let arr: [string,string,number];
    arr = [toFrom.value,detail.value,amount.valueAsNumber];

    let item: HasFormatter;
    if(type.value === 'invoice'){
        item = new Invoice(...arr)
    }
    else{
        item = new Payment(...arr)
    }

    tempItem.render(item,type.value,'end');

});