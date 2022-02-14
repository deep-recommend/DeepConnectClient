/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardToSearchPageButtonPComponent } from './dashboard-to-search-page-button-p.component';

describe('DashboardToSearchPageButtonPComponent', () => {
    let component: DashboardToSearchPageButtonPComponent;
    let fixture: ComponentFixture<DashboardToSearchPageButtonPComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardToSearchPageButtonPComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(
            DashboardToSearchPageButtonPComponent
        );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
