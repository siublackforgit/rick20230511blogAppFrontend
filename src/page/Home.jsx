import React from 'react'
import {Link} from "react-router-dom"

const posts= [{
  id:1,
  title: "Lorem ipsum dolor sit amet consectetur ",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad totam autem tenetur aut, dolorum iste consectetur cum sunt tempore harum culpa, incidunt nisi dignissimos non pariatur cumque optio eius illo.",
  img : "https://picsum.photos/id/1/800/800"

},
{
  id:2,
  title: "Lorem ipsum dolor sit amet consectetur ",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad totam autem tenetur aut, dolorum iste consectetur cum sunt tempore harum culpa, incidunt nisi dignissimos non pariatur cumque optio eius illo.",
  img : "https://picsum.photos/id/10/800/800"
},
{
  id:3,
  title: "Lorem ipsum dolor sit amet consectetur ",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad totam autem tenetur aut, dolorum iste consectetur cum sunt tempore harum culpa, incidunt nisi dignissimos non pariatur cumque optio eius illo.",
  img : "https://picsum.photos/id/12/800/800"
}

]

const Home = () => {
  return (
   <div className="home">
     <div className="posts">
      {posts.map((post=>(
        <div className="post" key={post.id}>
          <div className="img">
            <img src={post.img} alt={post.id} />
          </div>
          <div className="content">
            <Link to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.desc}</p>
            <button>Read More</button>
          </div>
        </div>
      )))}
     </div>
   </div>
  )
}

export default Home