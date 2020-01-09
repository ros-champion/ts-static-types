// function trimAndLower(text: string) {
//     return text.trim().toLowerCase();
// }
//
// console.log(trimAndLower(null));

// *** AFTER ***
function trimAndLower(text: string | null | undefined) {
    if (typeof text === "string") {
        return text.trim().toLowerCase();
    }
    return text;
}

console.log(trimAndLower(" LearnTypeScript.io "));
console.log(trimAndLower(null));
console.log(trimAndLower(undefined));

// =====================================================================================================================

const container = document.getElementById("app-container");
container.clientHeight;

// *** AFTER ***
// if (container) {
//     container.clientHeight;
// }

// *** OR ***
// const container = document.getElementById("app-container")!;
// container.clientHeight;
