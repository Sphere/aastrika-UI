import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSummaryComponent } from './active-summary.component';

describe('ActiveSummaryComponent', () => {
  let component: ActiveSummaryComponent;
  let fixture: ComponentFixture<ActiveSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
