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
    let item;
    if (type.value === 'invoice') {
        item = new Invoice(toFrom.value, detail.value, amount.valueAsNumber);
    }
    else {
        item = new Payment(toFrom.value, detail.value, amount.valueAsNumber);
    }
    tempItem.render(item, type.value, 'end');
});
