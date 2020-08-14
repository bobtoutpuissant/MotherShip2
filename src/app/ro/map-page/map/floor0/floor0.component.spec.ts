import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Floor0Component } from './floor0.component';

describe('Floor0Component', () => {
  let component: Floor0Component;
  let fixture: ComponentFixture<Floor0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Floor0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Floor0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
