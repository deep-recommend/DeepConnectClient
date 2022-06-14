import { Component, Input, OnChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BlockProps } from 'src/app/states/block';
import { FilterProps } from 'src/app/states/filter';

@Component({
    selector: 'app-my-page-tree-p',
    templateUrl: './my-page-tree-p.component.html',
    styleUrls: ['./my-page-tree-p.component.scss'],
})
export class MyPageTreePComponent implements OnChanges {
    treeControl = new NestedTreeControl<any>((node) => node.children);
    dataSource = new MatTreeNestedDataSource<any>();

    @Input() filters: FilterProps[] | null = [];
    @Input() blocks: BlockProps[] | null = [];

    constructor() {}

    ngOnChanges(): void {
        this.dataSource.data = [
            {
                name: '非表示のユーザー',
                children: this.filters?.map((filter) => filter.filterUser),
            },
            {
                name: 'ブロックしたユーザー',
                children: this.blocks?.map((block) => block.blockUser),
            },
        ];
    }
}
