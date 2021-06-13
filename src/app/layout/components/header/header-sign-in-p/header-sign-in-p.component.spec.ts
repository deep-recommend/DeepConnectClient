import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSignInPComponent } from './header-sign-in-p.component';

describe('HeaderSignInPComponent', () => {
  let component: HeaderSignInPComponent;
  let fixture: ComponentFixture<HeaderSignInPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSignInPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSignInPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
