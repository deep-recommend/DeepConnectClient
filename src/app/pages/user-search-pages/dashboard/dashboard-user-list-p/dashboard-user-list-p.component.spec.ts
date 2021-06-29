/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserListPComponent } from './dashboard-user-list-p.component';

describe('DashboardUserListPComponent', () => {
    let component: DashboardUserListPComponent;
    let fixture: ComponentFixture<DashboardUserListPComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardUserListPComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardUserListPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
