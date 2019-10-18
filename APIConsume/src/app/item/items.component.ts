import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: any = [];

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.itemService.getItems().subscribe(
            response => { 
                //console.dir(response);
                this.items = response;
            },
            error => console.log(error)
        );
    }
}
