import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignincompComponent } from './signincomp.component';

describe('SignincompComponent', () => {
  let component: SignincompComponent;
  let fixture: ComponentFixture<SignincompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignincompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignincompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
