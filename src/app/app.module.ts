import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { UniversityComponent } from './university/university.component';
import { SchoolClassComponent } from './university/school-class/school-class.component';
import { StudentComponent } from './university/school-class/student/student.component';
import { SchoolClassDialogComponent } from './university/school-class/school-class-dialog/school-class-dialog.component';
import { HttpHeadersInterceptor } from './shared/interceptors/http-headers-interceptor.service';
import { StudentDialogComponent } from './university/school-class/student/student-dialog/student-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversityComponent,
    SchoolClassComponent,
    StudentComponent,
    SchoolClassDialogComponent,
    StudentDialogComponent
  ],
  entryComponents: [SchoolClassDialogComponent, StudentDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
