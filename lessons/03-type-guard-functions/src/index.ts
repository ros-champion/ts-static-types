const numbers = [0, 1, 2, [3, 4], 5, [6], [7], 8, [9]];

function flatten<T>(array: (T | T[])[]): T[] {
    const flattened: T[] = [];

    for (const element of array) {
        if (Array.isArray(element)) {
            flattened.push(...element);
        } else {
            flattened.push(element);
        }
    }

    return flattened;
}

console.log(flatten(numbers));

//*** NEXT ***

function isFlat(array: (number | number[])[]): array is number[] {
    return true;
}

const s = isFlat(numbers);

if (isFlat(numbers)) {
    numbers;
}
