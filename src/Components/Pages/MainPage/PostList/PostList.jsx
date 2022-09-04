import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";

export default function PostList(){
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7777/posts', {method: 'GET'})
            .then((response) => {return response.json()})
            .then((data) => {return setList(data)})
    }, []);

    return(
        <div className="posts">
            {list.map(item => {
                return <Post key={item.id} id={item.id} content={item.content} created={item.created}/>
            })}
        </div>
    )
}