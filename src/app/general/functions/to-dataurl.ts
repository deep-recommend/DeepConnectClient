import * as loadImage from 'blueimp-load-image';
import { Observable } from 'rxjs';

/**
 * maxWidthを制限する
 */
export const toDataUrlAsObservable = (
    file: string | File | Blob,
    options?: loadImage.LoadImageOptions
): Observable<string> => {
    return new Observable<string>((subscriber) => {
        loadImage(
            file,
            (image) => {
                subscriber.next((image as HTMLCanvasElement).toDataURL());
                subscriber.complete();
            },
            {
                canvas: true,
                meta: true,
                orientation: true,
                ...options,
            }
        );
    });
};

export const toDataUrlAsPromise = (
    file: string | File | Blob,
    options?: loadImage.LoadImageOptions,
) => {
    return new Promise<string>(resolve => {
        loadImage(
            file,
            image => {
                resolve((image as HTMLCanvasElement).toDataURL());
            },
            {
                canvas: true,
                meta: true,
                orientation: true,
                ...options,
            }
        );
    });
};
