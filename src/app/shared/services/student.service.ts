import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  
  public findAllByClassName(className: string): Observable<Student[]> {
    return this.http.get<Student[]>(`/api/student/byclass/${className}`);
  }
}
