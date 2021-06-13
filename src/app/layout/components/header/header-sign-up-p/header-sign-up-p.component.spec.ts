import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSignUpPComponent } from './header-sign-up-p.component';

describe('HeaderSignUpPComponent', () => {
  let component: HeaderSignUpPComponent;
  let fixture: ComponentFixture<HeaderSignUpPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSignUpPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSignUpPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
