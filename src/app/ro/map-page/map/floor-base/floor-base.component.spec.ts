import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorBaseComponent } from './floor-base.component';

describe('FloorBaseComponent', () => {
  let component: FloorBaseComponent;
  let fixture: ComponentFixture<FloorBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
