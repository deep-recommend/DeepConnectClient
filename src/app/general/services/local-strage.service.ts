import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const APP_PREFIX = 'DeepRecommend-';

@Injectable({
    providedIn: 'root',
})
export class DeepRecommendLocalStorageService {
    subject: BehaviorSubject<any> = new BehaviorSubject<any>({});
    observer: Observable<any> = this.subject.asObservable();

    constructor() {
        this.subject.next(this.getAllItemByStatic());
    }

    /**
     * localStorageから保存されている全データを取得
     */
    private static loadInitialState(): object {
        return Object.keys(localStorage).reduce((state: any, storageKey) => {
            if (storageKey.includes(APP_PREFIX)) {
                const stateKeys = storageKey
                    .replace(APP_PREFIX, '')
                    .split('.')
                    .map((key) => this.kebab2Camel(key));

                let currentStateRef = state;
                stateKeys.forEach((key, index) => {
                    if (index === stateKeys.length - 1) {
                        currentStateRef[key] = JSON.parse(String(localStorage.getItem(storageKey)));
                        return;
                    }
                    currentStateRef[key] = currentStateRef[key] || {};
                    currentStateRef = currentStateRef[key];
                });
            }
            return state;
        }, {});
    }

    /**
     * ケバブケースをキャメルケースにコンバート
     * @param key
     */
    private static kebab2Camel(key: string): string {
        return key
            .toLowerCase()
            .split('-')
            .map((token, index) => {
                return index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1);
            })
            .join('');
    }

    private kebab2Camel(key: string): string {
        return DeepRecommendLocalStorageService.kebab2Camel(key);
    }

    /**
     * 静的に全データを取得する
     */
    getAllItemByStatic(): any {
        return DeepRecommendLocalStorageService.loadInitialState();
    }

    /**
     * 静的に指定されたkeyのデータを取得する
     * @param key
     */
    getItemByStatic(key: string): any {
        return JSON.parse(String(localStorage.getItem(`${APP_PREFIX}${key}`)));
    }

    /**
     * 全データを取得するObservableを返す
     */
    getAllItem(): Observable<any> {
        return this.observer;
    }

    /**
     * keyに設定された値を取得するObservableを返す
     * @param key
     */
    getItem(key: string): Observable<string> {
        return this.observer.pipe(
            map((data) => {
                return key || '';
                // return data[${this.kebab2Camel(key)}] || '';
            })
        );
    }

    /**
     * key,value形式でlocalStorageに値を保存する
     * @param key
     * @param value
     */
    setItem(key: string, value: any): void {
        localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
        this.subject.next(this.getAllItemByStatic());
    }

    /**
     * localStorageから指定したkeyの値を削除する
     * @param key
     */
    removeItem(key: string): void {
        localStorage.removeItem(`${APP_PREFIX}${key}`);
        this.subject.next(this.getAllItemByStatic());
    }

    /**
     * プレフィックス付きの項目をすべて削除する
     */
    removeAll(): void {
        Object.keys(localStorage).forEach((storageKey: string) => {
            if (storageKey.includes(APP_PREFIX)) {
                this.removeItem(storageKey.replace(APP_PREFIX, ''));
            }
        });
    }

    /**
     * テスト用
     */
    async testLocalStorage(): Promise<void> {
        const testValue = 'testValue';
        const testKey = 'testKey';

        let retrievedValue: string;

        const errorMessage = 'localStorage did not return expected value';

        this.setItem(testKey, testValue);
        retrievedValue = await this.getItem(testKey).toPromise();
        this.removeItem(testKey);

        if (retrievedValue !== testValue) {
            throw new Error(errorMessage);
        }
    }
}
