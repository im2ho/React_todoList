//Blog나 Board에 게시글을 작성할 수 있고,
//작성한 게시글이 남아있을 수 있도록 작성
import React,{useState, useEffect} from "react";
import '../css/App.css';

function Board() {
    
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const [posts, setPosts] = useState(savedPosts);
    const [newPost, setNewPost] = useState(savedPosts);

    useEffect(() => {
        localStorage.setItem('posts',JSON.stringify(posts));
    },[posts]);

    const addPost=() => {
        setPosts([...posts, newPost]);
        setNewPost('');
        localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
    }

    const removePost = (index) => {
        const updatePosts = [...posts];
        updatePosts.splice(index,1);
        setPosts(updatePosts);
    }

    return(
        <div>
            <div>
                <h1>고객의 소리</h1>
                <textarea
                    rows="5"
                    cols="50"
                    placeholder="무슨 생각 중이신가요?"
                    value={newPost}
                    onChange={(e)=>setNewPost(e.target.value)}
                /><br />
                <button onClick={addPost}>등록</button>
                <ul>
                    {posts.map((post, index)=>(
                        <li key={index}>
                            {post}
                            <button onClick={()=> removePost(index)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>소리함</h1>
                <ul>
                    {posts.map((post,index) => (
                        <li key={index}>{post}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Board;