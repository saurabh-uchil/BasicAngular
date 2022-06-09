import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriannaComponent } from './arianna.component';

describe('AriannaComponent', () => {
  let component: AriannaComponent;
  let fixture: ComponentFixture<AriannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AriannaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AriannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
