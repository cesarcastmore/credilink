import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContalinkComponent } from './contalink.component';

describe('ContalinkComponent', () => {
  let component: ContalinkComponent;
  let fixture: ComponentFixture<ContalinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContalinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContalinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
