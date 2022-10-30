import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import {HttpClientModule} from'@angular/common/http';
import { AdminViewFormsComponent } from './admin/admin-view-forms/admin-view-forms.component'
import { FormsModule } from '@angular/forms';
import { AdminAddFormComponent } from './admin/admin-add-form/admin-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminProfileComponent,
    AdminViewFormsComponent,
    AdminAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
