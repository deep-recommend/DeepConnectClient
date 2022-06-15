import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterProps } from 'src/app/states/filter';

@Component({
    selector: 'app-my-page-filter-users-p',
    templateUrl: './my-page-filter-users-p.component.html',
    styleUrls: ['./my-page-filter-users-p.component.scss'],
})
export class MyPageFilterUsersPComponent {
    @Input() filters: FilterProps[] | null = [];

    @Output() clickFilter: EventEmitter<number> = new EventEmitter();

    onClickFilter(id: number): void {
        this.clickFilter.emit(id);
    }
}
