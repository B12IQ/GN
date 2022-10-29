import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/models/form.model';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private formService:FormService) { }

  forms:Form[]=[];
  
  ngOnInit() {
    this.formService.getAllForms()
    .subscribe(
      res=>{
        this.forms=res
        console.log(res)  
      });
  }

}
