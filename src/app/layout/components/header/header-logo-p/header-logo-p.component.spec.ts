import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogoPComponent } from './header-logo-p.component';

describe('HeaderLogoPComponent', () => {
  let component: HeaderLogoPComponent;
  let fixture: ComponentFixture<HeaderLogoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLogoPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLogoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
