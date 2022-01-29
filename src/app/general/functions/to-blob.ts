import * as loadImage from 'blueimp-load-image';

export const toBlob = (
    file: string | File | Blob,
    options?: loadImage.LoadImageOptions
): Promise<string | File | Blob | null> => {
    return new Promise((resolve) => {
        loadImage(
            file,
            (image) => {
                (image as HTMLCanvasElement).toBlob((blob) => {
                    resolve(blob);
                });
            },
            {
                canvas: true,
                meta: true,
                orientation: true,
                maxWidth: 600,
            }
        );
    });
}
