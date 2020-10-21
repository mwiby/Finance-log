export class Invoice {
    constructor(person, details, amount) {
        this.person = person;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.person} owes me ${this.amount}$ for ${this.details}`;
    }
}
