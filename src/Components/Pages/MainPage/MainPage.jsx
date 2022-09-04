import PostList from "./PostList/PostList";
import CreateNewPostButton from "./CreateNewPostButton/CreateNewPostButton";

export default function MainPage(){
    return (
        <>  
            <CreateNewPostButton />
            <PostList />
        </>
    )
}