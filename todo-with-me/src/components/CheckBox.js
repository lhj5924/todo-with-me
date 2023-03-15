import { React } from 'react'

function CheckBox ({todo, handleChange}) {
    return (
        <>
            <input type='checkbox' 
                onChange={handleChange}
                id={todo.id}>
            </input>
        </>
    )
}

export default CheckBox;