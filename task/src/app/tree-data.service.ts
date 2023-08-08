import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  constructor(private http: HttpClient) { }

  getDataFromAPI() {
    return this.http.get(`http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173`);
  }
}
