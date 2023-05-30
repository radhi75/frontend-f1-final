import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_Blog } from '../redux/Action/BlogAction'
import BlogCard from './BlogCard'

const BlogList = () => {
  const dispatch=useDispatch()
  useEffect(() => {
  dispatch(Get_Blog())
  }, [dispatch])
const blogs=useSelector((state)=>state.Blogreducer.blogs)

  return (
    <div>{blogs.map((el)=><BlogCard key={el._id} el={el}/>)}</div>
  )
}

export default BlogList