import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpCComponent } from './sign-up-c.component';

describe('SignUpCComponent', () => {
  let component: SignUpCComponent;
  let fixture: ComponentFixture<SignUpCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
