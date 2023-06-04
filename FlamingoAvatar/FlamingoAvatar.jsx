import React from 'react'
import styles from './FlamingoAvatar.module.css'
import avatar from './assets/avatar.avif'

function FlamingoAvatar() {
  return <img src={avatar} className={styles.Avatar} title='Avatar' alt="avatar" />;
}

export default FlamingoAvatar