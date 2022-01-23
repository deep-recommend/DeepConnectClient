import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedDetailPComponent } from './matched-detail-p.component';

describe('MatchedDetailPComponent', () => {
  let component: MatchedDetailPComponent;
  let fixture: ComponentFixture<MatchedDetailPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchedDetailPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedDetailPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
