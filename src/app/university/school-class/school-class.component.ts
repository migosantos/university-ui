import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SchoolClassService } from '../../shared/services/school-class.service';
import { SchoolClass } from '../../shared/models/school-class.model';

@Component({
  selector: 'app-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.css']
})
export class SchoolClassComponent implements OnInit {

  schoolClassList$: MatTableDataSource<SchoolClass>;
  displayedColumns: string[] = ['className', 'location', 'teacherName', 'editRow', 'deleteRow'];
  currentSchoolClassName: string;

  constructor(private schoolClassService: SchoolClassService) { }

  ngOnInit() {
      this.schoolClassService.findAll().subscribe(
        data => {
          this.schoolClassList$ = new MatTableDataSource<SchoolClass>(data);
        }
      );
    }

  onClickRowHandler(schoolClass: SchoolClass) {
    this.currentSchoolClassName = schoolClass.className;
  }
  
}

