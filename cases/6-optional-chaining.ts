const nested = {
    moreNested: {
        evenMoreNested: {
            name: 'Oliver'
        }
    }
}

const firstName = nested && nested.moreNested && nested.moreNested.evenMoreNested && nested.moreNested.evenMoreNested.name;

// Optional chaining
const lastName = nested?.moreNested?.evenMoreNested?.name;
