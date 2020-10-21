"use strict";
// Form
var siteForm = document.querySelector('.new-item-form');
// Input value
var type = document.querySelector('#type');
var toFrom = document.querySelector('#tofrom');
var detail = document.querySelector('#details');
var amount = document.querySelector('#amount');
siteForm.addEventListener('submit', function (e) {
    e.preventDefault();
});
