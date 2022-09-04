import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function NewPostPage(){
    const [save, setSave] = useState(false)

    const handleClick = (event) => {
        event.preventDefault()

        const inptValue = document.querySelector('input').value

        fetch('http://localhost:7777/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: 0, content: inptValue})
        })
            .then(() => setSave(true))
    }

    return (
        <div className="add-new-post">
            <input type="text" />
            <button onClick={handleClick}>Опубликовать</button>
            <button onClick={() => setSave(true)}>Отменить</button>

            {save && <Navigate to={'/'}/>}
        </div>
    )
}