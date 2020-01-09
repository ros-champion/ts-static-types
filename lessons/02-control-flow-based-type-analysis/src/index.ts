function trimAndLower(text: string | null | undefined) {
    text;

    if (typeof text === "string") {
        text;

        return text.trim().toLowerCase();
    }

    text;

    return text;
}

// *** AFTER ***
// function trimAndLower(text: string | null | undefined) {
//     return text === "string" ? text.trim().toLowerCase() : text;
// }

// =====================================================================================================================

// let foo: number;
//
// console.log(foo);

// *** AFTER ***
// let foo: number | undefined;
//
// foo = 42;
// foo.toFixed(1);
//
// foo = undefined;
// foo. ???
