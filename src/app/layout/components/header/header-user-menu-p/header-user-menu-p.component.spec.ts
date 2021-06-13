import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUserMenuPComponent } from './header-user-menu-p.component';

describe('HeaderUserMenuPComponent', () => {
  let component: HeaderUserMenuPComponent;
  let fixture: ComponentFixture<HeaderUserMenuPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUserMenuPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUserMenuPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
