import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>
        Made by Ricky Yeung with <strong>React.js</strong>
      </span>
    </footer>
  )
}

export default Footer