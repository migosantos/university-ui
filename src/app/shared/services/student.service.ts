import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { catchError } from 'rxjs/operators';
import { MessagingService } from './messaging.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient,
    private messagingService: MessagingService) { }

  private getApiUrl(): string {
    return '/api/student'
  }
  
  public findAllByClassName(className: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.getApiUrl()}/byclass/${className}`);
  }

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.getApiUrl());
  }

  public create(student: Student) : Observable<Student> {
    let studentJson = JSON.stringify(student);
    return this.http.post<Student>(this.getApiUrl(),studentJson);
  }

  public createStudentAndAddToClass(className: string, student: Student) : Observable<Student> {
    let studentJson = JSON.stringify(student);
    return this.http.post<Student>(`${this.getApiUrl()}/addtoclass/${className}`,studentJson)
    .pipe<any>(catchError(val => {
      const msg = 'Student Already Exists'
      this.messagingService.pushErrorMessage(msg);
      return Observable.throw(msg);
    }));
  }

  public update(student: Student) : Observable<Student> {
    let studentJson = JSON.stringify(student);
    return this.http.post<Student>(`${this.getApiUrl()}/${student.lastName}`,studentJson);
  }

  public deleteByPk(studentName: string) : Observable<any> {
    return this.http.delete<Student>(`${this.getApiUrl()}/${studentName}`);
  }
}
