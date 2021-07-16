import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFromOthersPComponent } from './like-from-others-p.component';

describe('LikeFromOthersPComponent', () => {
  let component: LikeFromOthersPComponent;
  let fixture: ComponentFixture<LikeFromOthersPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeFromOthersPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeFromOthersPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
