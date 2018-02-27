import { Injectable } from '@angular/core';
import { GROCERYITEMS} from './mock-groceries';
import {GroceryItem} from './groceryItem';


@Injectable()


export class GroceryService {
    //groceries = ['chicken', 'pork']
  constructor() { }
   getGroceries():GroceryItem[] {
    
     return GROCERYITEMS; }
}

