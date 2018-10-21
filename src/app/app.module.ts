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

import { AppComponent } from './app.component';
import { UniversityComponent } from './university/university.component';
import { SchoolClassComponent } from './university/school-class/school-class.component';
import { StudentComponent } from './university/school-class/student/student.component';
import { SchoolClassDialogComponent } from './university/school-class/school-class-dialog/school-class-dialog.component';
import { HttpHeadersInterceptor } from './shared/interceptors/http-headers-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UniversityComponent,
    SchoolClassComponent,
    StudentComponent,
    SchoolClassDialogComponent
  ],
  entryComponents: [SchoolClassDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
