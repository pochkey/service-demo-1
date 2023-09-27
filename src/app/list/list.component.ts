import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  empListData : any;
  constructor(public servObj : EmpServiceService){
    this.empListData = this.servObj.empListData
    console.log(this.servObj);

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }



}
