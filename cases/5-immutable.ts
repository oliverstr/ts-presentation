import { BoxRule } from "./4-apis";

const constant = '123';
constant = '456';

const nested = {
    name: 'Oliver'
}

nested.name = 'Strobel'; // Shouldn't work

let nestedTS: { readonly name: string } = { name: 'Oliver' };

nestedTS = { name: 'Strobel' };

nestedTS.name = 'Oliver';

let readonlyArray: readonly string[] = ['Oliver'];

readonlyArray.push('Strobel'); // works for push, pop or splice

readonlyArray[0] = 'Strobel';


// Magical wrapper

export type Immutable<T> = {
    readonly [K in keyof T]: Immutable<T[K]>
}

const immutableVoucher: Immutable<BoxRule> = {
    applicable_to: 'you',
    discount_value: 1,
}

immutableVoucher.applicable_to = 'me';

