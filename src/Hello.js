import React, { useEffect } from 'react'

const Hello = () => {

    useEffect(() => {
        console.log('Hello render')

        return () => {
            console.log('Hello unmount');
        }
    });
    return (
        <h1>Hello Component</h1>
    )

}
export default Hello;
