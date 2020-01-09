var numbers = [0, 1, 2, [3, 4], 5, [6], [7], 8, [9]];
function flatten(array) {
    var flattened = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (Array.isArray(element)) {
            flattened.push.apply(flattened, element);
        }
        else {
            flattened.push(element);
        }
    }
    return flattened;
}
console.log(flatten(numbers));
//*** NEXT ***
// function isFlat<T>(array: (T | T[])[]): array is T[] {
//     return !array.some(Array.isArray);
// }
//
// if (isFlat(numbers)) {
//     numbers;
// }
