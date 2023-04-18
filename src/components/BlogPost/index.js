//import { useState } from 'react';
import "./index.css"


export default function BlogPost(props)
 {
  let blog = 
  {title: "My first post",
author: "Chris Meah",
datePosted: "20/11/2019",
content: "A structure used in most apps and games. It's a way to keep doing the same. While a condition is true, Or for one to twenty-two. If endless, for errors we blame .......... Loop",
imageSrc: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
imageAlt: "A couple of coders",
}

  return (
    <div className ="blogPost">  
      <h1>{blog.title}</h1>
      <h2>By{blog.author}</h2>
      <p> Date Posted {blog.datePosted} </p>
       <hr/>
      <img src= {blog.imageSrc} alt ={blog.imageAlt}/>
       <p> {blog.content} </p>
</div>
  );
}


