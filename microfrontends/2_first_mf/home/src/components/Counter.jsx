import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return(
        <div className='Counter'>
            <h1>{number}</h1>
            <button
                onClick={() => {
                    setNumber(number + 1);
                }}
            >
                +
            </button>
        </div>
    );
}