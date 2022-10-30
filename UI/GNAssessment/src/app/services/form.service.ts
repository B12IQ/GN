import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Form } from '../models/form.model';
import { UpdateFormRequest } from '../models/update-form.model';
import { AddFormRequest } from '../models/add-form.model';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private http: HttpClient) { }

  apiBaseUrl = environment.apiBaseUrl;

  getAllForms(): Observable<Form[]> {
    return this.http.get<Form[]>(this.apiBaseUrl + '/api/userform')
  }

  getFormById(id: string): Observable<Form[]> {
    return this.http.get<Form[]>(this.apiBaseUrl + '/api/userform/' + id)
  }


  updateForm(id: string | undefined, updateFormRequest: UpdateFormRequest): Observable<Form> {
    return this.http.put<Form>(this.apiBaseUrl + '/api/userform/' + id, updateFormRequest)
  }

  addForm(addFormRequest:AddFormRequest):Observable<Form>{
    return this.http.post<Form>(this.apiBaseUrl+'api/userform',addFormRequest)
  }

  deleteForm(id:string|undefined):Observable<Form>{
    return this.http.delete<Form>(this.apiBaseUrl + '/api/userform/' + id);
  }
}