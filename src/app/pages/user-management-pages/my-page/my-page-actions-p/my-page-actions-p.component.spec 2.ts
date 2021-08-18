import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageActionsPComponent } from './my-page-actions-p.component';

describe('MyPageActionsPComponent', () => {
  let component: MyPageActionsPComponent;
  let fixture: ComponentFixture<MyPageActionsPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPageActionsPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPageActionsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
