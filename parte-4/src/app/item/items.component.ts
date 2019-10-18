import { Component, OnInit } from "@angular/core";

import { Item } from "../services/item";
import { ItemService } from "../services/item.service";
import * as Toast from 'nativescript-toast';

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
    
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        private itemService: ItemService
    ) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    public onShowMessage(){
        Toast.makeText("Mostrando toast Message").show();
    }
}