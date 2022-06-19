import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { accessTokenKey } from 'src/app/general/utilities/api';
import { UserProps } from 'src/app/states/user/user.model';
import { selectAllEntities } from '@ngneat/elf-entities';
import { SocketService } from 'src/app/libs/socket/socket.service';
import { MatDialog } from '@angular/material/dialog';
import { UnblockDialogComponent } from '../../unblock-dialog/unblock-dialog.component';
import { BlockProps, blocksStore } from '../../../../states/block';
import { FilterProps, filtersStore } from '../../../../states/filter';
import { AppQuery } from '../../../../states/app.query';

@Component({
    selector: 'app-my-page-c',
    templateUrl: './my-page-c.component.html',
    styleUrls: ['./my-page-c.component.scss'],
})
export class MyPageCComponent implements OnInit {
    isMobile$: Observable<boolean> = this.appQuery.ui.isMobile$;
    profile$: Observable<UserProps> = this.appQuery.user.profile$;
    filters: FilterProps[] = [];
    blocks: BlockProps[] = [];

    constructor(
        private readonly router: Router,
        private readonly socket: SocketService,
        private readonly dialog: MatDialog,
        private readonly appQuery: AppQuery
    ) {}

    ngOnInit(): void {
        filtersStore.pipe(selectAllEntities()).subscribe((filters) => {
            this.filters = filters;
        });
        blocksStore.pipe(selectAllEntities()).subscribe((blocks) => {
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

    onReceivedClickFilter(id: number): void {
        this.socket.unfilter(id);
    }

    onReceivedClickBlock(id: number): void {
        this.dialog.open(UnblockDialogComponent, {
            data: { id },
        });
    }
}
