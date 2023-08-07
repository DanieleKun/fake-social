import { useState, useEffect } from 'react';
import { IPost } from '../models/IPost'
import { PostList } from '../components/PostList';


function PostsContainer() {
    const [loading, setLoading] = useState<boolean>(false)
    const [postList, setPostList] = useState<IPost[]>([])
    // const [title, setTitle] = useState<string>('');
    // const [body, setBody] = useState<string>('');

    
    // HTTP GET
    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPostList(data);
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                console.log(err.message);
            });
    }, []);
    
    const handleDelete = (id: IPost['id']) => {
        setLoading(true)
        setPostList(postList.filter(p => p.id !== id));
        setLoading(false)
    }

    //HTTP POST
    // const handleSubmit = (e:any) => {
    //     e.preventDefault();
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //        method: 'POST',
    //        body: JSON.stringify({
    //             userId: Math.random().toString(36).slice(2),
    //             id: Math.random().toString(36).slice(2),
    //             title: title,
    //             body: body,
    //        }),
    //        headers: {
    //           'Content-type': 'application/json; charset=UTF-8',
    //        },
    //     })
    //        .then((res) => res.json())
    //        .then((post) => {
    //           setPostList((posts) => [post, ...posts]);
    //           setTitle('');
    //           setBody('');
    //        })
    //        .catch((err) => {
    //           console.log(err.message);
    //        });
    //  };

    //HTTP DELETE
    // const handleDelete = async (id: IPost['id']) => {
    //     setLoadingPost(true)
    //     await fetch('https://jsonplaceholder.typicode.com/posts/' + { id }, {
    //         method: 'DELETE'
    //     })
    //     .then(() => {
    //         setPosts(posts.filter(p => p.id !== id));
    //         setLoadingPost(false)
    //     })
    //     .catch((err) => {
    //         setLoadingPost(false)
    //         console.log(err.message);
    //     });
    // }

    return (
        <>
            <PostList postList={postList} handleDelete={handleDelete} loading={loading}/>
        </>
    )
}

export default PostsContainer