import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPComponent } from './sign-up-p.component';

describe('SignUpPComponent', () => {
  let component: SignUpPComponent;
  let fixture: ComponentFixture<SignUpPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
