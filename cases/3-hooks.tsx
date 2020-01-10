import React, { useState, useEffect } from 'react';
import { FaqItem } from './2-props';

const UseState: React.FunctionComponent = () => {

    const [count, setCount] = useState(2);
    
    setCount('123'); // 🚨 ERROR
    setCount(12);

    // const [faq, setFaq] = useState<FaqItem>();

    // faq.author.toUpperCase(); // tsc --noEmit
    // setFaq({ lastName: 'james' }); // 🚨 ERROR

    return (
        <div>
            ...
        </div>
    )
}

const UseEffect = () => {

    useEffect(() => {
        console.log('Component mounted');

        return true; // 🚨 ERROR
    }, [])

    // useEffect(() => {
    //     console.log('Component mounted');

    //     return () => {
    //         console.log('Cleaning up');
    //     }
    // }, [])

    return (
        <div>
            
        </div>
    )
}

// MORE ON: https://fettblog.eu/typescript-react/hooks/
