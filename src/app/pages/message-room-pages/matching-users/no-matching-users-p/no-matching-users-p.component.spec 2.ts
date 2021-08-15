import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMatchingUsersPComponent } from './no-matching-users-p.component';

describe('NoMatchingUsersPComponent', () => {
  let component: NoMatchingUsersPComponent;
  let fixture: ComponentFixture<NoMatchingUsersPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoMatchingUsersPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMatchingUsersPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
