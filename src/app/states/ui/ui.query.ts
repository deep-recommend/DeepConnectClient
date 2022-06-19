import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UiStore } from './ui.store';
import { UiState } from './ui.model';
import { LikeQuery } from '../like/like.query';
import { includes, intersection } from 'lodash';
import {
    BreakpointObserver,
    Breakpoints,
    BreakpointState,
} from '@angular/cdk/layout';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UiQuery extends Query<UiState> {
    isMobile$ = of(false);

    ui$ = this.select('ui');
    authErrMsg$ = this.select((state) => state.ui.authErrMsg);
    pageName$ = this.select((state) => state.ui.pageName);
    isMessaging$ = this.select((state) => state.ui.isMessaging);

    header$ = this.select('header');
    headerAccountMenus$ = this.select((state) => state.header.accountMenus);
    isVisibleHeaders$ = this.select((state) => state.header.isVisibleHeaders);
    isVisibleMobileHeaders$ = this.select(
        (state) => state.header.isVisibleMobileHeaders
    );
    isVisibleLikeRoutingTab$ = this.select(
        (state) => state.header.isVisibleLikeRoutingTab
    );

    sideNav$ = this.select('sideNav');
    sideNavMenus$ = this.select((state) => state.sideNav.menus);
    isSideNavFullMenuVisible$ = this.select(
        (state) => state.sideNav.isFullMenuVisible
    );

    footer$ = this.select('footer');
    footerLawItems$ = this.select((state) => state.footer.footerLawItems);
    footerSnsItems$ = this.select((state) => state.footer.footerSnsItems);

    alreadyLikedByMyself(currentUserId: number, userId: number): boolean {
        const likeUserIds = this.likeQuery.likeAll
            .filter((o) => o.currentUserId === currentUserId)
            .map((o) => o.userId);
        const isLike = includes(likeUserIds, userId);
        return isLike;
    }

    alreadyLikedByOthers(currentUserId: number, userId: number): boolean {
        const likeUserIds = this.likeQuery.likeAll
            .filter((o) => o.currentUserId === userId)
            .map((o) => o.userId);
        const isLike = includes(likeUserIds, currentUserId);
        return isLike;
    }

    isMatching(currentUserId: number, userId: number): boolean {
        const likeByCurrentUserIds = this.likeQuery.likeAll
            .filter((o) => {
                o.currentUserId === currentUserId;
            })
            .map((o) => o?.id);
        const likeByUserIds = this.likeQuery.likeAll
            .filter((o) => {
                o.currentUserId === userId;
            })
            .map((o) => o.currentUserId);
        const likeEachOther = intersection(likeByCurrentUserIds, likeByUserIds);
        const isMatching = likeEachOther.length !== 0;
        return isMatching;
    }

    get pageNameGetter(): string {
        return this.getValue().ui.pageName;
    }

    get isSideNavFullMenuVisible(): boolean {
        return this.getValue().sideNav.isFullMenuVisible;
    }

    get isSideNavLocked(): boolean {
        return this.getValue().sideNav.isLocked;
    }

    constructor(
        protected readonly store: UiStore,
        private readonly likeQuery: LikeQuery,
        private breakpointObserver: BreakpointObserver
    ) {
        super(store);

        this.isMobile$ = this.breakpointObserver
            .observe(Breakpoints.XSmall)
            .pipe(map((state: BreakpointState) => state.matches));
    }
}
