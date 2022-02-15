/**
 * Usage
 * const hoge = iff(condition).then(() => fuga).else(() => piyo)
 */
export const iff = (condition: boolean) => {
    const thenMethod = (thenFunc: Function) => {
        const elseMethod = (elseFunc: Function) => {
            return condition ? thenFunc() : elseFunc();
        };
        return { else: elseMethod };
    };
    return { then: thenMethod };
};
