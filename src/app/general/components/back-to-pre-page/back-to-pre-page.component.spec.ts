import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToPrePageComponent } from './back-to-pre-page.component';

describe('BackToPrePageComponent', () => {
  let component: BackToPrePageComponent;
  let fixture: ComponentFixture<BackToPrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToPrePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToPrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
