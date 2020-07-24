import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartpagePlusRestrictedComponent } from './startpage-plus-restricted.component';

describe('StartpagePlusRestrictedComponent', () => {
  let component: StartpagePlusRestrictedComponent;
  let fixture: ComponentFixture<StartpagePlusRestrictedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartpagePlusRestrictedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartpagePlusRestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
