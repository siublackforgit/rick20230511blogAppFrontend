import React from 'react'

const Menu = () => {
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
  }]


  


  return (
    <div className="menu">
        <h1>Other posts you may like</h1>
        {posts.map((post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt={post.id} />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        )))}
    </div>
  )

      }
export default Menu