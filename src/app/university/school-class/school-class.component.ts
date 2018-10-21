import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SchoolClassService } from '../../shared/services/school-class.service';
import { SchoolClass } from '../../shared/models/school-class.model';
import { MatDialog } from '@angular/material/dialog';
import { SchoolClassDialogComponent } from './school-class-dialog/school-class-dialog.component';

@Component({
  selector: 'app-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.css']
})
export class SchoolClassComponent implements OnInit {

  schoolClassList$: MatTableDataSource<SchoolClass>;
  displayedColumns: string[] = ['className', 'location', 'teacherName', 'editRow', 'deleteRow'];
  currentSchoolClassName: string;

  constructor(private schoolClassService: SchoolClassService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.refreshGrid();
  }

  onClickRowHandler(schoolClass: SchoolClass): void {
    this.currentSchoolClassName = schoolClass.className;
  }

  onEditClick(schoolClass: SchoolClass): void {
    this.openDialog(schoolClass);
  }

  onDeleteClick(schoolClass: SchoolClass): void {
    this.schoolClassService.deleteByPk(schoolClass.className).subscribe(() => {
      this.refreshGrid();
    });
  }

  refreshGrid(): void{
    this.schoolClassService.findAll().subscribe(
      data => {
        this.schoolClassList$ = new MatTableDataSource<SchoolClass>(data);
      }
    );
  }

  openDialog(schoolClass: SchoolClass): void {
    const dialogRef = this.dialog.open(SchoolClassDialogComponent, {
      width: '250px',
      data: schoolClass
    });

    dialogRef.afterClosed().subscribe(result => {
      this.schoolClassService.update(result).subscribe((newData) => {
        this.refreshGrid();
      });
    });
  }
  
}

