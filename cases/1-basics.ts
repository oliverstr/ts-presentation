/** Type infer */

let variable = 'Hello World'; //type string

variable = 123;

/** Type declaration */

let stringVariable: string;

stringVariable = 'Hi';

stringVariable = 123;

/** Custom types */

type Config = {
    path: string
    timeout: number
    start: Date
}

let config: Config = {
    path: '/recipes/...',
    timeout: 300,
    start: new Date()
};

config.

config.path = 123;

config.path = '/plans/...'

/** Chaining, Optional and Arrays */

type Recipe = {
    id: number,
    name: string,
    prepTime: string,
    totalTime?: number
}

type RecipesResponse = {
    count: number,
    items: Recipe[]
}

let RecipesResponse: RecipesResponse = {
    count: 1,
    items: [
        {
            id: 123,
            name: 'Chorizo',
            prepTime: 'PT30M',
        }
    ]
}

RecipesResponse.items.map(value => value.)

/** Functions */

function sumJsValues(value1, value2) {
    return value1 + value2;
}

function sumTsValues(value1: number, value2: number) {
    return value1 + value2;
}

/** Generics */

type WrappedValue<T> = {
    genericProperty: T
}

let numberProperty: WrappedValue<number[]> = {
    genericProperty: []
}

numberProperty.genericProperty


// type FilterFunction<T> = {
//     (val: T): boolean;
//   }

// const stringFilter: FilterFunction<string> = val => typeof val === "string";
// stringFilter(0); // 🚨 ERROR
// stringFilter("abc"); // ✅ OK
