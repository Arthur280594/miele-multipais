import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasQuejasComponent } from './encuestas-quejas.component';

describe('EncuestasQuejasComponent', () => {
  let component: EncuestasQuejasComponent;
  let fixture: ComponentFixture<EncuestasQuejasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasQuejasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasQuejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
