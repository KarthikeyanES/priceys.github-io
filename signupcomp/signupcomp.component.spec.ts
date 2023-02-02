import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupcompComponent } from './signupcomp.component';

describe('SignupcompComponent', () => {
  let component: SignupcompComponent;
  let fixture: ComponentFixture<SignupcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
