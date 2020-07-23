import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartpagePlusComponent } from './startpage-plus.component';

describe('StartpagePlusComponent', () => {
  let component: StartpagePlusComponent;
  let fixture: ComponentFixture<StartpagePlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartpagePlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartpagePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
