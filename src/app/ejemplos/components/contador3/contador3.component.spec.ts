import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contador3Component } from './contador3.component';

describe('Contador3Component', () => {
  let component: Contador3Component;
  let fixture: ComponentFixture<Contador3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contador3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contador3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
