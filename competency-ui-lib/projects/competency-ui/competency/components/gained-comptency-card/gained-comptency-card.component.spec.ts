import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GainedComptencyCardComponent } from './gained-comptency-card.component';

describe('GainedComptencyCardComponent', () => {
  let component: GainedComptencyCardComponent;
  let fixture: ComponentFixture<GainedComptencyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GainedComptencyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GainedComptencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
