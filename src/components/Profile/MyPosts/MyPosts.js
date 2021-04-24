import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostRef = React.createRef();
    let newPost = () => {
        props.addPostCreateAction();
    }
    let newText = () => {
        let text = newPostRef.current.value;
        props.addDataPostTextCreateAction(text);
    }

    let posts = props.postsData.map(p => <Post posts = {p.post} key = {p.id}/>)
    return <div>
        <textarea onChange={newText} ref = {newPostRef} value={props.textData} />
        <button onClick={newPost}>Add post</button>
        {posts}
    </div>
}

export default MyPosts