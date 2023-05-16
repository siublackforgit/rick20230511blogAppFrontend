import React from 'react'
import Menu from '../components/Menu'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import {Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://picsum.photos/1200/1200" alt="contetnt" />
        <div className="user">
          <img src="https://picsum.photos/id/10/1200/1200" alt="user" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}><img src={Edit} alt="edit" />
            </Link>
            <Link ><img src={Delete} alt="delete" />
            </Link>
          </div>         
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur </h1>
          <p>
          adipisicing elit. Inventore, vero ut, tenetur, voluptatem qui atque odit perferendis omnis autem dolores totam adipisci aut similique. A explicabo optio omnis ipsa sit?
          </p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single