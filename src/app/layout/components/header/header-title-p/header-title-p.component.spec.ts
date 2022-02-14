import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTitlePComponent } from './header-title-p.component';

describe('HeaderTitlePComponent', () => {
    let component: HeaderTitlePComponent;
    let fixture: ComponentFixture<HeaderTitlePComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderTitlePComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderTitlePComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
