import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLogoPComponent } from './footer-logo-p.component';

describe('FooterLogoPComponent', () => {
  let component: FooterLogoPComponent;
  let fixture: ComponentFixture<FooterLogoPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLogoPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLogoPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
