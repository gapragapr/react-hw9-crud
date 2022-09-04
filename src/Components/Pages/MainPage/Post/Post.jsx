import moment from 'moment'
import { Link } from 'react-router-dom'

export default function Post({id, content, created}){

    const getCurrentDate = (created) => {
        return moment(created).format('DD MM YYYY')
    }

    return (
        <Link className='post-wrapper' to={`/posts/${id}`}>
            <div className="post">
                <div className="author-data">
                    <img src="https://picsum.photos/200" alt="" />
                    <p className='author-name'>Yyy Kkk</p>
                </div>
                <div className="post-data">
                    <p className='post-date'>{getCurrentDate(created)}</p>
                    <p className="post-content">{content}</p>
                </div>
            </div>
        </Link>
    )
}