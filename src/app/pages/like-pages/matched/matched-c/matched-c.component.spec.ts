import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedCComponent } from './matched-c.component';

describe('MatchedCComponent', () => {
    let component: MatchedCComponent;
    let fixture: ComponentFixture<MatchedCComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MatchedCComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchedCComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
