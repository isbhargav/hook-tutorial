import React, { useEffect, useState } from 'react'
export const RandomFact = (props) => {
    const num = props.value;
    const [fact, setFact] = useState(null);
    useEffect(() => {
        fetch('http://numbersapi.com/' + num).then(x => x.text()).then(x => setFact(x))
    }, [num])
    return (
        <h3>{fact}</h3>
    );
}