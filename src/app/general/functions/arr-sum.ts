export const arrSum = (arr: Array<number>): number => {
    return arr.reduce((prev, current, i, arr) => {
        return prev + current;
    });
};
