import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopCardListComponent } from './pop-card-list.component';

describe('PopCardListComponent', () => {
  let component: PopCardListComponent;
  let fixture: ComponentFixture<PopCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
