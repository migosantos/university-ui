import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { UniversityComponent } from './university/university.component';
import { SchoolClassComponent } from './university/school-class/school-class.component';
import { StudentComponent } from './university/school-class/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversityComponent,
    SchoolClassComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
