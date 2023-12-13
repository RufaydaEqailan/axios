import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchAxios = () => {
    const [state, setstate] = useState([])
    useEffect(() => { fetchAxios() }, [])
    // const fetchData = async () => {
    //     await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
    //         .then(response => response.json())
    //         .then(data => setstate(data))

    // }
    const fetchAxios = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setstate(res.data)
    }

    return (
        <div>
            {state.map((item) => {
                return (<h2>{item.title}</h2>)

            })}
        </div>
    )
}

export default FetchAxios
