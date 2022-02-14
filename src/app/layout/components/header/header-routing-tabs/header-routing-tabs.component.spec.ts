import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRoutingTabsComponent } from './header-routing-tabs.component';

describe('HeaderRoutingTabsComponent', () => {
    let component: HeaderRoutingTabsComponent;
    let fixture: ComponentFixture<HeaderRoutingTabsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderRoutingTabsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderRoutingTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
