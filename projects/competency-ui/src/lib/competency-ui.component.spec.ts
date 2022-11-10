import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyUiComponent } from './competency-ui.component';

describe('CompetencyUiComponent', () => {
  let component: CompetencyUiComponent;
  let fixture: ComponentFixture<CompetencyUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
