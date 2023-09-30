
"use client"

import { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu  } from 'react-pro-sidebar';
import './slidBar.css'
import Link from 'next/link';



  function SlideBar() {

    const [width, setWidth] = useState('');
    const [collapse, setCollapse] = useState(false);
    const [isExpand, setIsExpand] = useState(false)


    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    const handleCollapse=()=>{
      setCollapse(!collapse)
    }

    useEffect(() => {
      
      window.addEventListener('resize', updateWidth);



      if(width < 500){
        setCollapse(true)
        setIsExpand(true)
      }else{
        setCollapse(false)
        setIsExpand(false)
      }
    

      // Cleanup: Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }, []);

    
    
    return (
      <>
            <Sidebar width={'300px'} className='position-absloute' collapsed={collapse} style={{minHeight:'100vh', backgroundColor: '#ECF5FA'}}  >
            <div onClick={()=>handleCollapse()} className={`icon ${isExpand ? '' : 'd-block'} me-1`}>
            <i className="bi bi-list"></i>
            </div>
          <Menu className='mt-4'>
            <SubMenu className='mt-4 menuItem' icon={ <i className="bi bi-person-gear"></i> } label="Edit Profile" style={{backgroundColor: '#ECF5FA'}}>
              <MenuItem component={<Link href={'/editprofile/personal_info'}></Link>} style={{backgroundColor: '#ECF5FA' }}>
                <i className="bi bi-person"></i> Personal information
              </MenuItem >
              <MenuItem component={<Link href={'/editprofile/security'}></Link>} style={{backgroundColor:'#ECF5FA' }} icon={<i className="bi bi-person-lock"></i>}>
               Security
              </MenuItem>
            </SubMenu>
            <MenuItem component={<Link href={'/editprofile/wishlist'}></Link>} className='menuItem ' icon={<i className="bi bi-heart"></i>}>
               Wishlist
            </MenuItem>
            <MenuItem component={<Link href={'/editprofile/cart'}></Link>} className='menuItem ' icon={<i className="bi bi-cart"></i>}>
               Cart
            </MenuItem>
          </Menu>
        </Sidebar>

      </>
    )
  }

  export default SlideBar