import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedPComponent } from './matched-p.component';

describe('MatchedPComponent', () => {
  let component: MatchedPComponent;
  let fixture: ComponentFixture<MatchedPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchedPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
