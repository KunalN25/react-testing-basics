import React, { useEffect, useState } from 'react'

const data = [
    {
        id: 1,
        name: 'kunal'
    },
    {
        id: 2,
        name: 'paul'
    },
    {
        id: 3,
        name: 'lisandro'
    },
]
const TestingStateChange = () => {

    const [loaded, setLoaded] = useState(false)
    const [toggleTextVisible, setToggleTextVisible] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(false)

    const [elements, setElements] = useState(data);

    useEffect(() => {
        setLoaded(true)
    }, [])

  return (
    <div>
        {loaded && <h3> Page Loaded </h3>}
        {toggleTextVisible && <p> Text visible </p> }
        <button disabled={btnDisabled} 
                onClick={() => { setToggleTextVisible(!toggleTextVisible) }}> Toggle text </button>

        <button onClick={() => { setBtnDisabled(!btnDisabled) }}> 
            Toggle button disabled 
        </button>

        <h3> List </h3>
        {elements.map(item => (
            <div key= {item.id} data-testid='record'>
               {item.id}: { item.name }
            </div>
        ))}
        <button onClick={() => {
            setElements([...elements, {
                id: 4,
                name: 'bruno'
            }])
        }}> Add to list </button>

        <button onClick={() => {
            setElements(elements.filter(item => item.id != 2))
        }}> Remove from list </button>



    </div>
  )
}

export default TestingStateChange
