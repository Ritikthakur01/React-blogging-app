import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import { getDoc,doc } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';

export default function PostDetail() {

  const { postID } = useParams()
  const [post,setPost] = useState('')

  useEffect(()=>{
    const fetchpost = async function(){
      const post = await getDoc(doc(db,'blogs',postID))
      if( post.exists()){
        setPost(
          {
            ...post.data(),
            id:post.id
          }
        )
      }
    }
    fetchpost()
  },[])

  return (
    <div className='post-detail'>
      <h1>{post.title}</h1>
      <Link to={`/`}>
        <div id='back'>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#89CFF0' }}/>
        </div>
      </Link>
      <p>{post.content}</p>
    </div>
  )
}
