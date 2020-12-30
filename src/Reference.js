import { render } from '@testing-library/react';
import React, { useState, useRef, useEffect } from 'react'

function Reference() {

    const [name, setName] = useState('');
    const renderCount = useRef(1);

    useEffect(() =>{
        renderCount.current = renderCount.current + 1
    })

    return (
        <div>
            <h1>Use Ref</h1>
            <input type="text" onChange={e => setName(e.target.value)}></input>
            <br />
            <h3>My Name is {name}</h3>
    <h3>I rendered {renderCount.current} times</h3>
        </div>
    )
}

export default Reference
