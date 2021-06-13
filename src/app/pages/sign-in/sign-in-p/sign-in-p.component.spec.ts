import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPComponent } from './sign-in-p.component';

describe('SignInPComponent', () => {
  let component: SignInPComponent;
  let fixture: ComponentFixture<SignInPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
