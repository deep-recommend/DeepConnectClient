import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFromOthersDetailPComponent } from './like-from-others-detail-p.component';

describe('LikeFromOthersDetailPComponent', () => {
  let component: LikeFromOthersDetailPComponent;
  let fixture: ComponentFixture<LikeFromOthersDetailPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeFromOthersDetailPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeFromOthersDetailPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
