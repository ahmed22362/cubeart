'use client';
import BadeMap from '@/components/BadeMap/BadeMap';
import PersonalInfo from '@/components/PersonalInfo/PersonalInfo';
import Security from '@/components/Security/Security';
import Wishlist from '@/components/Wishlist/Wishlist';
import SlideBar from '@/components/slideBar/SlideBar';

import React, { useState } from 'react';

function page() {

  const [selectedComponent, setSelectedComponent] = useState(null);

  // Function to load a component into the container
  const loadComponent = (componentName) => {
    switch (componentName) {
      case 'personalInfo':
        return <PersonalInfo />;
      case 'security':
        return <Security />;
        case 'wishlist' :
          return <Wishlist/>
      // Add more cases for other components as needed
      default:
        return null;
    }
  };

  return (
    <>
   <div className="d-flex g-3">
   <SlideBar onSelectComponent={setSelectedComponent} />

<div className="container-fluid">
  <div className="row g-3">
  {selectedComponent && loadComponent(selectedComponent)}

    
    
   </div>
   
 </div>
 
   </div>
     </>       
             
  )
}

export default page