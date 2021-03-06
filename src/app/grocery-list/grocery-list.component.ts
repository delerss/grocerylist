import { Component, OnInit } from '@angular/core';
import {GroceryService} from '../grocery.service';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  constructor(private _groceryService : GroceryService) { 
  }
    groceries = this._groceryService.getGroceries();

  ngOnInit() {
    console.log(this._groceryService.getGroceries())
  }

}
