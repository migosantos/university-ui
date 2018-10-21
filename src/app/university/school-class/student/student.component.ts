import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../../shared/models/student.model';
import { StudentService } from '../../../shared/services/student.service';
import { MatDialog } from '@angular/material';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';

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

  constructor(private studentService: StudentService,
    public dialog: MatDialog) { 

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.currentSchoolClassName 
      && changes.currentSchoolClassName.currentValue
      && changes.currentSchoolClassName.currentValue !== changes.currentSchoolClassName.previousValue) {
        this.refreshGrid(changes.currentSchoolClassName.currentValue);
    }
  }

  isHighGrade(gpa: number) : boolean{
    if(gpa >= 3.2) {
      return true;
    } else {
      return false;
    }
  }
  
  onEditClick(student: Student): void {
    this.openDialog(student);
  }

  onDeleteClick(student: Student): void {
    this.studentService.deleteByPk(student.lastName).subscribe(() => {
      this.refreshGrid(this.currentSchoolClassName);
    });
  }

  onAddClick() {
    this.openDialogForAdd();
  }

  refreshGrid(currClassName: string): void{
    this.studentService.findAllByClassName(currClassName).subscribe(
      data => {
        this.studentList$ = new MatTableDataSource<Student>(data);
      }
    );
  }

  openDialog(student: Student): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '250px',
      data: student
    });

    const dialogRefInstance = dialogRef.componentInstance;
    dialogRefInstance.operation = "EDIT";

    dialogRef.afterClosed().subscribe(result => {
      this.studentService.update(result).subscribe((newData) => {
        this.refreshGrid(this.currentSchoolClassName);
      });
    });
  }

  openDialogForAdd(): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '250px',
      data: new Student()
    });

    const dialogRefInstance = dialogRef.componentInstance;
    dialogRefInstance.operation = "ADD";

    dialogRef.afterClosed().subscribe(result => {
      this.studentService.createStudentAndAddToClass(this.currentSchoolClassName, result).subscribe((newData) => {
        this.refreshGrid(this.currentSchoolClassName);
      });
    });
  }
  

}
