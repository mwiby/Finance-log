
import {HasFormatter} from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter{


    constructor(
        readonly person:string,
        private details:string,
        private amount:number
    ){}

    format(){
        return `${this.person} owes me ${this.amount}$ for ${this.details}`;
    }

}