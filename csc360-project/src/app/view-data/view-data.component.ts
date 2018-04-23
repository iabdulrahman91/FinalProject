import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnInit {

  public message: string;
  public values: any[];

  constructor(private _apiService : ApiService) { 
    this.message = 'Hello from HomeComponent constructor';
  }



  ngOnInit() {

    this._apiService
    .getAll<any[]>()
    .subscribe((datas: any[]) => this.values = datas,
    error => () => {
        console.log('uh oh');
    },
    () => {
        console.log('yeahhhhhhh');
    });

  
  
  }






}
