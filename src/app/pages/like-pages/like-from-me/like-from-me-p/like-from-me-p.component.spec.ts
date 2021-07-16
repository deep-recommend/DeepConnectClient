import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFromMePComponent } from './like-from-me-p.component';

describe('LikeFromMePComponent', () => {
  let component: LikeFromMePComponent;
  let fixture: ComponentFixture<LikeFromMePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeFromMePComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeFromMePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
