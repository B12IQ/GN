import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from 'src/app/models/form.model';
import { UpdateFormRequest } from 'src/app/models/update-form.model';
import {NgForm} from '@angular/forms';

import { FormService } from 'src/app/services/form.service';
 

@Component({
  selector: 'app-admin-view-forms',
  templateUrl: './admin-view-forms.component.html',
  styleUrls: ['./admin-view-forms.component.css']
})
export class AdminViewFormsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private formService: FormService) { }

  formPost!: Form[] | any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');

        if (id) {
          this.formService.getFormById(id)
            .subscribe(
              res => {
                console.log(res);
                this.formPost = res;
              }
            )
        }
      }
    )

  }

  onSubmit(): void{
    const updateFormRequest:UpdateFormRequest ={

      name : this.formPost?.name,
      mobile : this.formPost?.mobile,
      email : this.formPost?.email,
      country : this.formPost?.country,
      birthDate : this.formPost?.birthDate,
      contractStartDate : this.formPost?.contractStartDate,
      contractEndDate : this.formPost?.contractEndDate,
      srlHandel : this.formPost?.srlHandel,
      city: undefined,
      status: undefined
    }


    this.formService.updateForm(this.formPost?.id,updateFormRequest)
    .subscribe(res=>{
      alert('Succsess')
    })

  }
 

  deleteUserForm(){
    this.formService.deleteForm(this.formPost?.id).subscribe(
      res=>{
        alert('Deleted Successfully')
      }
    )
  }
}
 