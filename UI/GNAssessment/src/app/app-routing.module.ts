import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddFormComponent } from './admin/admin-add-form/admin-add-form.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminViewFormsComponent } from './admin/admin-view-forms/admin-view-forms.component';

const routes: Routes = [
  {
    path:'admin/forms',
    component:AdminProfileComponent
  },{
    path:'admin/forms/add',
    component:AdminAddFormComponent   
  },{
    path:'admin/forms/:id',
    component:AdminViewFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
