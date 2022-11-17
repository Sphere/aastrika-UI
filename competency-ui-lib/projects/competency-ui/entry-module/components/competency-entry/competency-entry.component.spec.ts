import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyEntryComponent } from './competency-entry.component';

describe('CompetencyEntryComponent', () => {
  let component: CompetencyEntryComponent;
  let fixture: ComponentFixture<CompetencyEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
