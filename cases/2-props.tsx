import React from 'react';

const ExampleJS = ({ items }) => (
    <ul>
        {items.map(item => {
            <div>
                <h1>{item.title}</h1>
                <p>{item.copy}</p>
            </div>
        })}
    </ul>
)

// export type FaqItem = {
//     /** The question */
//     title: string,
//     /** The answer */
//     copy: string,
//     /** User who wrote it.
//      *  Only visible when logged in!
//      */
//     author: string
// }

// type Props = {
//     items?: FaqItem[]
// }

// const ExampleTS: React.FunctionComponent<Props> = ({ items, children }) => {
//     return (
//         <ul>
//             {items.map(item => {
//                 <div>
//                     <h1>{item.title}</h1>
//                     <p>{item.copy}</p>
//                     {children}
//                 </div>
//             })}
//         </ul>
//     )
// }

// const ExampleContainer: React.FunctionComponent = () => (
//     <ExampleTS>
//         'I love TS'
//     </ExampleTS>
// )

// tsc --noEmit
