import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  employee :any[] = [];
  users: any;
  errorMsg = ""

  constructor(private dataservice:DataServiceService) { }

  ngOnInit(): void {
    this.employee = this.dataservice.getEmployees();
    this.dataservice.getMovies().subscribe((data) =>{
          this.users = data
    },(error)=>{this.errorMsg = error})
  }

}
