import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { TemplateItem } from './classes/TemplateItem.js';
// Form
const siteForm = document.querySelector('.new-item-form');
// Input value
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list instance
const ul = document.querySelector('.item-list');
const tempItem = new TemplateItem(ul);
siteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Tuples for destructure into object
    let arr;
    arr = [toFrom.value, detail.value, amount.valueAsNumber];
    let item;
    if (type.value === 'invoice') {
        item = new Invoice(...arr);
    }
    else {
        item = new Payment(...arr);
    }
    tempItem.render(item, type.value, 'end');
});
