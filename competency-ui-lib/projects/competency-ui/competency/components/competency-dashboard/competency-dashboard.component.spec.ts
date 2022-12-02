import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyDashboardComponent } from './competency-dashboard.component';

describe('CompetencyDashboardComponent', () => {
  let component: CompetencyDashboardComponent;
  let fixture: ComponentFixture<CompetencyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
