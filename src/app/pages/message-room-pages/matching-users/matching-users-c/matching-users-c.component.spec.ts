import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingUsersCComponent } from './matching-users-c.component';

describe('MatchingUsersCComponent', () => {
  let component: MatchingUsersCComponent;
  let fixture: ComponentFixture<MatchingUsersCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingUsersCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingUsersCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
