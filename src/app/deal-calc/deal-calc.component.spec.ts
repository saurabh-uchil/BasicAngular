import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealCalcComponent } from './deal-calc.component';

describe('DealCalcComponent', () => {
  let component: DealCalcComponent;
  let fixture: ComponentFixture<DealCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
