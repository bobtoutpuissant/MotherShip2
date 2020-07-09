import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContComponent } from './app-cont.component';

describe('AppContComponent', () => {
  let component: AppContComponent;
  let fixture: ComponentFixture<AppContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
