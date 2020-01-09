interface UserInterface {
    readonly id: number;
    name: string;
}

const user: UserInterface = {
    id: 10,
    name: 'ros',
};

// user.id = 1;

const weekdays: ReadonlyArray<string> = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

weekdays[0] = 'Friday';

//*** NEXT ***
// const weekdays: ReadonlyArray<string> = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ];
