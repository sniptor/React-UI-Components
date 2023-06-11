import React, { useRef } from 'react'
import FlamingBtn1 from './FlamingoBtn1/FlamingoBtn1'
import styles from './FlamingoNav.module.css'
import { ReactComponent as Menu } from "./assets/menu.svg";
import { ReactComponent as Close } from "./assets/close.svg";

function FlamingoNav() {
  const SideBar = useRef(null)
  const SideBarOverlay = useRef(null)
  const handleOpenSidebar = () => {
    SideBarOverlay.current.style.display = 'block'
    SideBar.current.style.right = 0;
  }
  const handleCloseSidebar = () => {
    SideBar.current.style.right = '-300%';
    SideBarOverlay.current.style.display = 'none'
  }
  return (
    <div className={styles.wrapper}>
      <nav className={styles.Nav}>
        <div className={styles.NavContainer}>
          <h1 className={styles.Logo}>Logo</h1>
          <div className={styles.LinksContainer}>
            <a href="#" className={styles.NavLink}>
              <h2 className={styles.LinkText}>Link 1</h2>
            </a>
            <a href="#" className={styles.NavLink}>
              <h2 className={styles.LinkText}>Link 2</h2>
            </a>
            <a href="#" className={styles.NavLink}>
              <h2 className={styles.LinkText}>Link 3</h2>
            </a>
            <a href="#" className={styles.NavLink}>
              <h2 className={styles.LinkText}>Link 4</h2>
            </a>
            <a href="#" className={styles.NavLink}>
              <h2 className={styles.LinkText}>Link 5</h2>
            </a>
          </div>
          <FlamingBtn1 className={styles.FlamingBtn1} />
          <Menu
            className={styles.HamMenu}
            onClick={() => handleOpenSidebar()}
          />
        </div>
        <div
          ref={SideBarOverlay}
          className={styles.SideBarOverlay}
          onClick={() => handleCloseSidebar()}
        ></div>
        <div ref={SideBar} className={styles.SideBar}>
          <Close
            className={styles.CloseIcon}
            onClick={() => handleCloseSidebar()}
          />
          <div className={styles.LinksContainer1}>
            <a href="#" className={styles.NavLink}>
              <h2 className={styles.LinkText}>Link 1</h2>
            </a>
            <a href="#" className={styles.NavLink}>
              <h2 className={styles.LinkText}>Link 2</h2>
            </a>
            <a href="#" className={styles.NavLink}>
              <h2 className={styles.LinkText}>Link 3</h2>
            </a>
            <a href="#" className={styles.NavLink}>
              <h2 className={styles.LinkText}>Link 4</h2>
            </a>
            <a href="#" className={styles.NavLink}>
              <h2 className={styles.LinkText}>Link 5</h2>
            </a>
            <FlamingBtn1 className={styles.FlamingBtn2} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default FlamingoNav