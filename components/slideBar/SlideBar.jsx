// import React from 'react'
// import Icon from "awesome-react-icons";

// import {Navigation} from 'react-minimal-side-navigation';
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
// function SlideBar() {
//   return (
//     <div>
//         <Navigation
        
//           items={[
//             {
//               title: "Home",
//               itemId: "/home",
//               // Optional
//               elemBefore: () => <Icon name="coffee" />
//             },
//             {
//               title: "About",
//               itemId: "/about",
//               elemBefore: () => <Icon name="user" />,
//               subNav: [
//                 {
//                   title: "Projects",
//                   itemId: "/about/projects",
//                   // Optional
//                   elemBefore: () => <Icon name="cloud-snow" />
//                 },
//                 {
//                   title: "Members",
//                   itemId: "/about/members",
//                   elemBefore: () => <Icon name="coffee" />
//                 }
//               ]
//             },
//             {
//               title: "Another Tab",
//               itemId: "/another",
//               subNav: [
//                 {
//                   title: "Teams",
//                   itemId: "/another/teams"
//                   // Optional
//                   // elemBefore: () => <Icon name="calendar" />
//                 }
//               ]
//             }
//           ]}
//         />

//         <div className="absolute bottom-0 w-full my-8">
//           <Navigation
//             activeItemId={location.pathname}
//             items={[
//               {
//                 title: "Settings",
//                 itemId: "/settings",
//                 elemBefore: () => <Icon name="activity" />
//               }
//             ]}
//             onSelect={({ itemId }) => {
//               history.push(itemId);
//             }}
//           />
//         </div>
//     </div>
//   )
// }

// export default SlideBar
"use client"
import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu  } from 'react-pro-sidebar';
import './slidBar.css'
import Link from 'next/link';



function SlideBar({ onSelectComponent }) {

  const [width, setWidth] = useState(window.innerWidth);
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
  }, [window.innerWidth ]);

  
  
  return (
    <>
          <Sidebar width={'300px'}   collapsed={collapse}  backgroundColor='#ECF5FA' style={{height:'100vh'}}  >
          <div onClick={()=>handleCollapse()} className={`icon ${isExpand ? '' : 'd-block'} me-1`}>
          <i className="bi bi-list"></i>
          </div>
        <Menu className='mt-4'>
          <SubMenu  className='mt-4 menuItem' backgroundColor='#ECF5FA'  icon={ <i className="bi bi-person-gear"></i> } label="Edit Profile">
           
            <MenuItem component={<a onClick={() => onSelectComponent('personalInfo')}></a>} className=' ' backgroundColor='#ECF5FA'  style={{backgroundColor:'#ECF5FA' }}>
              <i className="bi bi-person"></i> Personal information
            </MenuItem >
            <MenuItem component={<a onClick={() => onSelectComponent('security')}></a>} className=' ' style={{backgroundColor:'#ECF5FA' }} icon={<i className="bi bi-person-lock"></i>}>
             Security
            </MenuItem>
          </SubMenu>
          <MenuItem component={<a onClick={() => onSelectComponent('wishlist')}></a>} className='menuItem ' icon={<i className="bi bi-heart"></i>}>
             Wishlist
          </MenuItem>
          <MenuItem component={<a onClick={() => onSelectComponent('checkout')}></a>} className='menuItem ' icon={<i className="bi bi-cart"></i>}>
             Checkout
          </MenuItem>
        </Menu>
      </Sidebar>
         
      
    
    </>
  )
}

export default SlideBar