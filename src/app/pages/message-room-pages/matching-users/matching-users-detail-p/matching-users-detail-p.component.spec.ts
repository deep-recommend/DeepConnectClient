import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingUsersDetailPComponent } from './matching-users-detail-p.component';

describe('MatchingUsersDetailPComponent', () => {
  let component: MatchingUsersDetailPComponent;
  let fixture: ComponentFixture<MatchingUsersDetailPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingUsersDetailPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingUsersDetailPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
