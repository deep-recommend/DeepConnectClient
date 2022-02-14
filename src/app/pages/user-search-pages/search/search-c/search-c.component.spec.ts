import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCComponent } from './search-c.component';

describe('SearchCComponent', () => {
    let component: SearchCComponent;
    let fixture: ComponentFixture<SearchCComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchCComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchCComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
