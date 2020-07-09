import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCardTempComponent } from './pop-card-temp.component';

describe('PopCardTempComponent', () => {
  let component: PopCardTempComponent;
  let fixture: ComponentFixture<PopCardTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopCardTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopCardTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
