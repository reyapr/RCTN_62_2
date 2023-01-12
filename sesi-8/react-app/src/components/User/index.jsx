import React from 'react'
import styles from './styles.module.css'
import { greyColor } from "./styles.js";

const titleStyle = {
  backgroundColor: 'greenyellow',
  padding: '10px 0px'
}

const User = () => {
  return (
    <div class="border-bottom border-dark border-5">
      <div class="bg-warning py-1">
        My First React App
      </div>
      <div className={styles.title} style={greyColor}>
        User
      </div>
    </div>
  )
}

export default User