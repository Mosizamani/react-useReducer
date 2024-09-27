import { useState } from 'react'

export default function AddTask({ onAddTask}) {
    const [text, setText] = useState('')

}

return (
    <>
        <input 
        placeholder="Add task..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        />
    </>
)