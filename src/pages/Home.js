import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase';
import { onSnapshot,collection } from 'firebase/firestore';

export default function Home() {
  
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    
      onSnapshot(collection(db,'blogs'),(snapshot)=>{
        const posts = snapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data(),
          }
        })
        setPosts(posts)
      })
  },[])

  return (
    <div className="home">
      <h1>Tech Blogs</h1>
      <div id='blog-by'>Ritik Thakur</div>

      {posts.map((post,index)=>(
        <div className="post" key={`post-${index}`}>

          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>

          <p>{post.sub_title}</p>
        </div>
      ))}

    </div>
  )
}
