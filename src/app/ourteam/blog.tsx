'use client'
import './style.scss'
import Image from 'next/image'
import Link from 'next/link'
import imgMan from '../../../public/assets/humanImg.png'
import { useState } from 'react'
const Blog=()=>{
        const [post,setPost]=useState([
            {
                imgSrc:imgMan,
                title:'Katie Hilton',
                description:"Designer",
                link:"#"
            },
            {
                imgSrc:imgMan,
                title:'Katie Hilton',
                description:"Designer",
                link:"#"
            },
            {
                imgSrc:imgMan,
                title:'Katie Hilton',
                description:"Designer",
                link:"#"
            },
            {
                imgSrc:imgMan,
                title:'Katie Hilton',
                description:"Designer",
                link:"#"
            },
            {
                imgSrc:imgMan,
                title:'Katie Hilton',
                description:"Designer",
                link:"#"
            },
            {
                imgSrc:imgMan,
                title:'Katie Hilton',
                description:"Designer",
                link:"#"
            },
            {
                imgSrc:imgMan,
                title:'Katie Hilton',
                description:"Designer",
                link:"#"
            },
            {
                imgSrc:imgMan,
                title:'Katie Hilton',
                description:"Designer",
                link:"#"
            },
            
        ])
        return (
            <div className='container'>
              <div className='blog'>
                <div className='blog_wrap'>
                  {post.map((post, index) => (
                    <div className='blog_card' key={index}>
                      <div className='blog_img'>
                        <Image src={post.imgSrc} alt='logo' />
                      </div>
                      <div className='blog_title'>
                        <div className='blog_nameTitle'>
                          <Link href={post.link} className='blog_name'>
                            <h5>{post.title}</h5>
                          </Link>
                          <span className='blog_description'>
                            <Link href={post.link}>
                              {post.description}
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
}
export default Blog