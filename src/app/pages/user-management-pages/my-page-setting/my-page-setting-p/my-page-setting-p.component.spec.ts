import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageSettingPComponent } from './my-page-setting-p.component';

describe('MyPageSettingPComponent', () => {
  let component: MyPageSettingPComponent;
  let fixture: ComponentFixture<MyPageSettingPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPageSettingPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPageSettingPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
