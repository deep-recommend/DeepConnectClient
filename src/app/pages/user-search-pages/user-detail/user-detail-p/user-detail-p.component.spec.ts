import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailPComponent } from './user-detail-p.component';

describe('UserDetailPComponent', () => {
  let component: UserDetailPComponent;
  let fixture: ComponentFixture<UserDetailPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
