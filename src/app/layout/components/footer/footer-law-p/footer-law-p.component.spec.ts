import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLawPComponent } from './footer-law-p.component';

describe('FooterLawPComponent', () => {
  let component: FooterLawPComponent;
  let fixture: ComponentFixture<FooterLawPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLawPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLawPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
