import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasGeneralesComponent } from './encuestas-generales.component';

describe('EncuestasGeneralesComponent', () => {
  let component: EncuestasGeneralesComponent;
  let fixture: ComponentFixture<EncuestasGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
