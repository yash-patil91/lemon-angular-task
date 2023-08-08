import { Component, OnInit } from '@angular/core';
import { TreeDataService } from '../tree-data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  tree: any = [];

  constructor(private http: TreeDataService) { }

  ngOnInit(): void {
    this.http.getDataFromAPI().subscribe((res) => {
      this.tree = res;
      console.log(this.tree);
    })
  }

}
