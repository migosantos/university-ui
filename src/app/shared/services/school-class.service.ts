import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SchoolClass } from '../models/school-class.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<SchoolClass[]> {
    return this.http.get<SchoolClass[]>('/api/schoolclass');
  }
}
