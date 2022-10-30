import { Component, OnInit } from '@angular/core';
import { AddFormRequest } from 'src/app/models/add-form.model';
import { Form } from 'src/app/models/form.model';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-admin-add-form',
  templateUrl: './admin-add-form.component.html',
  styleUrls: ['./admin-add-form.component.css']
})
export class AdminAddFormComponent implements OnInit {

  constructor(private formService:FormService) { }

  addForm:AddFormRequest={
    name: '',
      mobile: '',
      email: '',
      country: '',
      city: '',
      birthDate: '',
      contractStartDate: '',
      contractEndDate: '',
      status :true,
      srlHandel: '',

  }
  ngOnInit(): void {
  }

  onSubmit():void{
    this.formService.addForm(this.addForm).subscribe(res=>{
      alert('Success')
    })
  }

 

}
