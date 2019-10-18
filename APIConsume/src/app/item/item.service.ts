import { Injectable } from "@angular/core";

import { Item } from "./item";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ItemService {

    constructor(private http: HttpClient) { }
    getItems() {
       return this.http.get(
           "https://jsonplaceholder.typicode.com/todos"
        );
    }

    
}
