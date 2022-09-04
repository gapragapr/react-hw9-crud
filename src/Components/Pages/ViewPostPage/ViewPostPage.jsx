import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import Post from '../MainPage/Post/Post'

export default function ViewPostPage(){
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [postUpdated, setPostUpdated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:7777/posts', {method: 'GET'})
            .then((response) => {return response.json()})
            .then((data) => {
                data.map(item => item.id == id && setPost(item))
            })
    }, [postUpdated !== false])

    const getCurrentDate = (created) => {
        return moment(created).format('DD MM YYYY')
    }

    const handleDeleteClick = (event) => {
        event.preventDefault()

        fetch(`http://localhost:7777/posts/${id}`, {method: 'DELETE'})
            .then(() => navigate('/'))
    }

    return (
        <>
            {post && <div className="post">
                        <div className="author-data">
                            <img src="https://picsum.photos/200" alt="" />
                            <p className='author-name'>Yyy Kkk</p>
                        </div>
                        <div className="post-data">
                            <p className='post-date'>{getCurrentDate(post.created)}</p>
                            <p className="post-content">{post.content}</p>
                        </div>
                    </div>}
            <button>Изменить</button>
            <button onClick={handleDeleteClick}>Удалить</button>
        </>
    )
}