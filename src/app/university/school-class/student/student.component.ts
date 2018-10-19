import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../../shared/models/student.model';
import { StudentService } from '../../../shared/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnChanges {

  @Input()
  currentSchoolClassName: string;
  studentList$: MatTableDataSource<Student>;
  displayedColumns: string[] = ['name', 'age', 'gpa', 'editRow', 'deleteRow'];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.currentSchoolClassName 
      && changes.currentSchoolClassName.currentValue
      && changes.currentSchoolClassName.currentValue !== changes.currentSchoolClassName.previousValue) {
      this.studentService.findAllByClassName(changes.currentSchoolClassName.currentValue).subscribe(
        data => {
          this.studentList$ = new MatTableDataSource<Student>(data);
        }
      );
    }
  }


}
