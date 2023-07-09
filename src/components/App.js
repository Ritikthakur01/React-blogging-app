import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Home,CreatePost,PostDetail } from '../pages'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/post/:postID' element={<PostDetail/>}/>
        <Route exact path='/create-post' element={<CreatePost/>}/>
      </Routes>
    </div>
  )
}
export default App