import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartpageMainComponent } from './startpage-main.component';

describe('StartpageMainComponent', () => {
  let component: StartpageMainComponent;
  let fixture: ComponentFixture<StartpageMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartpageMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartpageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
