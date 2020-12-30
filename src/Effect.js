import React, {useState, useEffect} from 'react'

function Effect() {
const[resource, setResource] = useState('posts');
const [items, setItems] = useState([]);

useEffect( () => {
fetch(`https://jsonplaceholder.typicode.com/${resource}`)
.then( resp => resp.json())
.then(json => setItems(json))
}, [resource]);

    return (
        <>
        <h1>Use Effect</h1>
        <div>
            <button onClick={() => setResource('Posts')}>Posts</button>
            <button onClick={() => setResource('Users')}>Users</button>
            <button onClick={() => setResource('Comments')}>Comments</button>
        </div>
        <h1>{resource}</h1>
        {items.map( item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
        </>
    )
}

export default Effect
