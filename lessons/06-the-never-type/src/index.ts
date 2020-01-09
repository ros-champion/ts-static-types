const sing = function (): never {
    while (true) {
        console.log('Opa');
        // break;
    }
};

const sing2 = function (): void {
    console.log('Opa');
};

enum ShirtSize {
    S,
    M,
    L,
    XL,
}

function prettyPrint(size: ShirtSize) {
    switch (size) {
        case ShirtSize.S: return "small";
        case ShirtSize.M: return "medium";
        case ShirtSize.L: return "large";
        case ShirtSize.XL: return "extra large";
        default: return assertNever(size);
    }
}

function assertNever(value: never): never {
    throw Error(`Unexpected value '${value}'`);
}
