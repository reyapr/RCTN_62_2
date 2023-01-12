import React from 'react'
import styles from './styles.module.css'
import { greyColor } from "./styles.js";

const titleStyle = {
  backgroundColor: 'greenyellow',
  padding: '10px 0px'
}

const User = () => {
  return (
    <>
      <div style={titleStyle}>
        My First React App
      </div>
      <div className={styles.title} style={greyColor}>
        User
      </div>
    </>
  )
}

export default User