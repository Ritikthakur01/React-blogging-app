import React from 'react'
import { useForm } from '../CustomHook'
import { db } from '../firebase';
import { collection,addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid';

export default function CreatePost() {
  const title = useForm("");
  const subTitle = useForm("");
  const content = useForm("");
  
  function handleSubmit(e){
    e.preventDefault();

    addDoc(collection(db,'blogs'),{
      "title":title.value,
      "sub_title":subTitle.value,
      "content":content.value,
      "createdat":new Date()
    })
  }

  return (
    <div className='create-post'>

      <h1>Create Post</h1>
      <Link to={`/`}>
        <div id='back'>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#89CFF0' }}/>
        </div>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Title</label>
          <input type="text" {...title}/>{/*{...title} is equal to 'value={title.value} onChange={title.onChange}'*/}
        </div>

        <div className='form-field'>
          <label>Sub Title</label>
          <input type="text" {...subTitle} /> {/*{...subTitle} is equal to 'value={subTitle.value} onChange={subTitle.onChange}'*/}
        </div>

        <div className='form-field'>
          <label>Content</label>
          <textarea type="text" {...content}></textarea> {/*{...content} is equal to 'value={content.value} onChange={content.onChange}'*/}
        </div>

        <button className='create-post-btn'>Create Post</button>
      </form>

    </div>
  )
}
