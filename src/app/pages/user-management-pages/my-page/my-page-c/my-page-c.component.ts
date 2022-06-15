import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { accessTokenKey } from 'src/app/general/utilities/api';
import { BlockProps, blocksStore } from 'src/app/states/block';
import { UserProps } from 'src/app/states/user/user.model';
import { UserQuery } from 'src/app/states/user/user.query';
import { selectAllEntities } from '@ngneat/elf-entities';
import { FilterProps, filtersStore } from 'src/app/states/filter';

@Component({
    selector: 'app-my-page-c',
    templateUrl: './my-page-c.component.html',
    styleUrls: ['./my-page-c.component.scss'],
})
export class MyPageCComponent implements OnInit {
    profile$: Observable<UserProps> = this.userQuery.profile$;
    filters: FilterProps[] = [];
    blocks: BlockProps[] = [];

    constructor(
        private readonly userQuery: UserQuery,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        filtersStore.pipe(selectAllEntities()).subscribe((filters) => {
            console.log({ filters });
            this.filters = filters;
        });
        blocksStore.pipe(selectAllEntities()).subscribe((blocks) => {
            console.log({ blocks });
            this.blocks = blocks;
        });
    }

    onReceivedClickToProfileSetting(): void {
        this.router.navigate(['my-page-setting']);
    }

    onReceivedClickSignOut(): void {
        if (localStorage.getItem(accessTokenKey)) {
            localStorage.removeItem(accessTokenKey);
            this.router.navigate(['/sign-in']);
        }
    }
}
