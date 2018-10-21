import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SchoolClass } from '../models/school-class.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {

  constructor(private http: HttpClient) { }

  private getApiUrl(): string {
    return '/api/schoolclass'
  }

  public findAll(): Observable<SchoolClass[]> {
    return this.http.get<SchoolClass[]>(this.getApiUrl());
  }

  public create(schoolClass: SchoolClass) : Observable<SchoolClass> {
    let schoolClassJson = JSON.stringify(schoolClass);
    return this.http.post<SchoolClass>(this.getApiUrl(),schoolClassJson);
  }

  public update(schoolClass: SchoolClass) : Observable<SchoolClass> {
    let schoolClassJson = JSON.stringify(schoolClass);
    return this.http.post<SchoolClass>(`${this.getApiUrl()}/${schoolClass.className}`,schoolClassJson);
  }

  public deleteByPk(schoolClassName: string) : Observable<any> {
    return this.http.delete<SchoolClass>(`${this.getApiUrl()}/${schoolClassName}`);
  }
}
