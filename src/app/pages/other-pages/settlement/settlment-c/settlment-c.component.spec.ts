import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlmentCComponent } from './settlment-c.component';

describe('SettlmentCComponent', () => {
  let component: SettlmentCComponent;
  let fixture: ComponentFixture<SettlmentCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlmentCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlmentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
