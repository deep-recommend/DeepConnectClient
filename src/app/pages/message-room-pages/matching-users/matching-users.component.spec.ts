import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingUsersComponent } from './matching-users.component';

describe('MatchingUsersComponent', () => {
  let component: MatchingUsersComponent;
  let fixture: ComponentFixture<MatchingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
