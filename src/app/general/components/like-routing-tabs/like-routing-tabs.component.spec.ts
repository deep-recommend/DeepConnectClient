import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeRoutingTabsComponent } from './like-routing-tabs.component';

describe('LikeRoutingTabsComponent', () => {
  let component: LikeRoutingTabsComponent;
  let fixture: ComponentFixture<LikeRoutingTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeRoutingTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeRoutingTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
