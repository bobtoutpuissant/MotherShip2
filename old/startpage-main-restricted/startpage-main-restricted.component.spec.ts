import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartpageMainRestrictedComponent } from './startpage-main-restricted.component';

describe('StartpageMainRestrictedComponent', () => {
  let component: StartpageMainRestrictedComponent;
  let fixture: ComponentFixture<StartpageMainRestrictedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartpageMainRestrictedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartpageMainRestrictedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
