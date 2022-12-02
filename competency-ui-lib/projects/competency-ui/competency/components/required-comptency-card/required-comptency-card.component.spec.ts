import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredComptencyCardComponent } from './required-comptency-card.component';

describe('RequiredComptencyCardComponent', () => {
  let component: RequiredComptencyCardComponent;
  let fixture: ComponentFixture<RequiredComptencyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredComptencyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredComptencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
