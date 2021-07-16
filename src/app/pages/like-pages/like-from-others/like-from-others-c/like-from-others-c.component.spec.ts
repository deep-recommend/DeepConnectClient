import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFromOthersCComponent } from './like-from-others-c.component';

describe('LikeFromOthersCComponent', () => {
  let component: LikeFromOthersCComponent;
  let fixture: ComponentFixture<LikeFromOthersCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeFromOthersCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeFromOthersCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
