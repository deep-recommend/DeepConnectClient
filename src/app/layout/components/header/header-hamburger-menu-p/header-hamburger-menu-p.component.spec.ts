import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHamburgerMenuPComponent } from './header-hamburger-menu-p.component';

describe('HeaderHamburgerMenuPComponent', () => {
  let component: HeaderHamburgerMenuPComponent;
  let fixture: ComponentFixture<HeaderHamburgerMenuPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHamburgerMenuPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHamburgerMenuPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
