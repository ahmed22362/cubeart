"use client"
import React, { useState } from 'react'
import styles from './sideBar.module.css'
function SideBar() {
  const [isExpand, setIsExpand] = useState(false)
  return (
    
    <div className={`container-fluid `}>
      <div className="row">
       <div className={`col-auto ${styles.slide_background}`}>
       <div className={`${ isExpand?styles.sideBar : styles.sideBarNx} ${styles.sideBar_container} mt-0 min-vh-100   position-relative `}>
          <button className={`${styles.collapse} ${isExpand?styles.collapse_in:styles.collapse_out}`}
          onClick={ () => setIsExpand(!isExpand)}
          >
            <span className={`${styles.span } ${styles.span_1}`}></span>
            <span className={`${styles.span } ${styles.span_2}`}></span>
            <span className={`${styles.span } ${styles.span_3}`}></span>
          </button>
          <ul className={`mt-3 `}>
            <li>
              <a className={`nav-link ${styles.nav_link} px-2`}>
                <i className='bi-house'></i> <span className='ms-1 d-none d-sm-inline'>Home</span>
              </a>
            </li>
            <li>
              <a className={`nav-link ${styles.nav_link} px-2`}>
                <i className='bi-table'></i> <span className='ms-1 d-none d-sm-inline'>Table</span>
              </a>
            </li>
            <li>
              <a className={`nav-link ${styles.nav_link}  px-2`}>
                <i className='bi-heart'></i> <span className='ms-1 d-none d-sm-inline'>Heart</span>
              </a>
            </li>
            <li>
              <a className={`nav-link ${styles.nav_link} px-2`}>
                <i className='bi-speedometer'></i> <span className='ms-1 d-none d-sm-inline'>Speed</span>
              </a>
            </li>
          </ul>
        </div>
       </div>
       <div className='col-md-3'>
        <div>
          <h1>ffff</h1>
        </div>
        
       </div>
      </div>
    </div>
  )
}

export default SideBar