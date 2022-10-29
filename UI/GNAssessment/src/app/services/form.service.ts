import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Form } from '../models/form.model';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private http:HttpClient) { }

  apiBaseUrl=environment.apiBaseUrl;

  getAllForms():Observable<Form[]>{
   return this.http.get<Form[]>(this.apiBaseUrl+'/api/userform')
  }
}
