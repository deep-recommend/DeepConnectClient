import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlockProps } from 'src/app/states/block';

@Component({
    selector: 'app-my-page-block-users-p',
    templateUrl: './my-page-block-users-p.component.html',
    styleUrls: ['./my-page-block-users-p.component.scss'],
})
export class MyPageBlockUsersPComponent {
    @Input() blocks: BlockProps[] = [];

    @Output() clickBlock: EventEmitter<number> = new EventEmitter();

    onClickBlock(id: number): void {
        this.clickBlock.emit(id);
    }
}
