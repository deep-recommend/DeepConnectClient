import { Component, Input, OnChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { BlockProps } from 'src/app/states/block';
import { FilterProps } from 'src/app/states/filter';
import { UserProps } from '../../../../states/user/user.model';

@Component({
    selector: 'app-my-page-tree-p',
    templateUrl: './my-page-tree-p.component.html',
    styleUrls: ['./my-page-tree-p.component.scss'],
})
export class MyPageTreePComponent implements OnChanges {
    @Input() filters: FilterProps[] | null = [];
    @Input() filterUsers: UserProps[] = [];
    @Input() blocks: BlockProps[] | null = [];

    constructor() {}

    ngOnChanges(change: any): void {
        this.filterUsers = this.filters?.map(
            (filter) => filter.filterUser
        ) as UserProps[];
        // console.log({ change });
        // this.dataSource.data = [
        //     {
        //         name: '非表示のユーザー',
        //         children: this.filters?.map((filter) => filter.filterUser),
        //     },
        //     {
        //         name: 'ブロックしたユーザー',
        //         children: this.blocks?.map((block) => block.blockUser),
        //     },
        // ];
    }
}
