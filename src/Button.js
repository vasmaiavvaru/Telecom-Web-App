import React, { useEffect } from 'react';

export const Button = ({onIncrement, numberOfClicks}) => {
    console.log('Button rendering!')
    useEffect(() => {
        console.log('useEffect fucntion called!');

    }, []);
   
    
    return (
        <>
        <p>
            You've clicked the button {numberOfClicks} times
        </p>
        <button onClick = {onIncrement}>Click Me!</button>
        </>
    );
}