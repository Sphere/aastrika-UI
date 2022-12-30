import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyAccordionComponent } from './competency-accordion.component';

describe('CompetencyAccordionComponent', () => {
  let component: CompetencyAccordionComponent;
  let fixture: ComponentFixture<CompetencyAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
