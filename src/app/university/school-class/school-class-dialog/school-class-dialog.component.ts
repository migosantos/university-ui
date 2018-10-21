import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolClass } from '../../../shared/models/school-class.model';

@Component({
  selector: 'app-school-class-dialog',
  templateUrl: './school-class-dialog.component.html',
  styleUrls: ['./school-class-dialog.component.css']
})
export class SchoolClassDialogComponent implements OnInit {

  @Input()
  public operation: string;
  
  constructor(
    public dialogRef: MatDialogRef<SchoolClassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SchoolClass) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
