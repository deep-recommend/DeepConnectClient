export const switchf = (switchVal: any) => {
    const caseMethod = (funcToDo?: Function) => (caseVal: any) => {
        const isFixedNow = !funcToDo && switchVal === caseVal;
        const thenMethod =
            (funcToDo: Function, isFixedNow: boolean) =>
            (thenVal: any) =>
            (thenFunc: Function) => {
                const defaultMethod =
                    (funcTodo: Function) => (defaultValFunc: Function) => {
                        return (funcTodo || defaultValFunc)();
                    };
                return {
                    case: caseMethod(isFixedNow ? thenFunc : funcToDo),
                    default: defaultMethod(isFixedNow ? thenFunc : funcToDo),
                };
            };
        if (funcToDo) {
            return { then: thenMethod(funcToDo, isFixedNow) };
        }
    };
    return { case: caseMethod() };
};

// usage
// const hoge = switchf(val).case(caseVal).then(() => 'hoge')
