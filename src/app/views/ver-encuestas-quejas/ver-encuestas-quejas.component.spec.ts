import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEncuestasQuejasComponent } from './ver-encuestas-quejas.component';

describe('VerEncuestasQuejasComponent', () => {
  let component: VerEncuestasQuejasComponent;
  let fixture: ComponentFixture<VerEncuestasQuejasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEncuestasQuejasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEncuestasQuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
