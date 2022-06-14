import { Component, OnChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface FoodNode {
    name: string;
    children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
    {
        name: '非表示のユーザー',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ],
    },
    {
        name: 'ブロックしたユーザー',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ],
    },
];

@Component({
    selector: 'app-my-page-tree-p',
    templateUrl: './my-page-tree-p.component.html',
    styleUrls: ['./my-page-tree-p.component.scss'],
})
export class MyPageTreePComponent implements OnChanges {
    treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
    dataSource = new MatTreeNestedDataSource<FoodNode>();

    // @Input() filterUsers: Filter[] = [];
    // @Input() blockUsers: Block[] = [];

    constructor() {
        this.dataSource.data = TREE_DATA;
    }

    ngOnChanges(): void {
        // this.dataSource.data = [
        //     {
        //         name: '非表示のユーザー',
        //         children: this.filterUsers,
        //     },
        //     {
        //         name: 'ブロックしたユーザー',
        //         children: this.blockUsers,
        //     },
        // ];
    }

    hasChild = (_: number, node: FoodNode) =>
        !!node.children && node.children.length > 0;
}
