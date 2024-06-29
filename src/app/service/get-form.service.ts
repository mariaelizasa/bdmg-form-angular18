import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from '../models/form.model';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GetFormService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<Form[]> {
    return this.httpClient.get<Form[]>(environment.apiUrl);

  }
  
}
