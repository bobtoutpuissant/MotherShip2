import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcBarComponent } from './src-bar.component';

describe('SrcBarComponent', () => {
  let component: SrcBarComponent;
  let fixture: ComponentFixture<SrcBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrcBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrcBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
