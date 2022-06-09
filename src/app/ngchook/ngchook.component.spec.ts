import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgchookComponent } from './ngchook.component';

describe('NgchookComponent', () => {
  let component: NgchookComponent;
  let fixture: ComponentFixture<NgchookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgchookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgchookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
