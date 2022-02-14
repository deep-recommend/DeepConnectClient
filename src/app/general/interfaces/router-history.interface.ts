import { NavigationEnd, NavigationStart } from '@angular/router';

export interface RouterHistory {
    history: HistoryEntry[] | undefined;
    currentIndex: number | undefined;

    event: NavigationStart | NavigationEnd | undefined;
    trigger: NavigationTrigger | undefined;
    id: number | undefined;
    idToRestore: number | undefined;
}

export interface HistoryEntry {
    id: number;
    url: string;
}

export type NavigationTrigger = 'imperative' | 'popstate' | 'hashchange';
