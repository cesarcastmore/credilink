import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialesSatComponent } from './credenciales-sat.component';

describe('CredencialesSatComponent', () => {
  let component: CredencialesSatComponent;
  let fixture: ComponentFixture<CredencialesSatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredencialesSatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredencialesSatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
