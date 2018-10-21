import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassDialogComponent } from './school-class-dialog.component';

describe('SchoolClassDialogComponent', () => {
  let component: SchoolClassDialogComponent;
  let fixture: ComponentFixture<SchoolClassDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolClassDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
