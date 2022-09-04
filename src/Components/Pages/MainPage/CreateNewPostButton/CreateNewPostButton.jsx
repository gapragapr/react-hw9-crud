import { Link } from "react-router-dom";

export default function CreateNewPostButton(){
    return (
        <div className="create-new-post-button">
            <Link to={'/posts/new'}>Создать пост</Link>
        </div>
    )
}