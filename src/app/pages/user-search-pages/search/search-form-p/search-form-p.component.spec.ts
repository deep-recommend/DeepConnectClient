import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormPComponent } from './search-form-p.component';

describe('SearchFormPComponent', () => {
    let component: SearchFormPComponent;
    let fixture: ComponentFixture<SearchFormPComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchFormPComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchFormPComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
