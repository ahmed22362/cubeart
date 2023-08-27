"use client"

import { useEffect } from 'react';
import { Map, Microsoft } from 'bingmaps';

const BingMap = () => {
  useEffect(() => {
    
    const map = new Map('#bing-map-container', {
      
      credentials: 'AvHiirJT4i-gXUbYKhp27Mw60wJnqzAWDwpqpa2I4ZCFEcyvdWDdHxTNPIRKQn36',
    
    });

    // Customize the map view or add markers, polylines, etc. here

    // For example:
    const center = new Microsoft.Maps.Location(47.6097, -122.3331); // Seattle coordinates
    
    map.setView({ center, zoom: 10 });
  
    }, []);

  return <div id="bing-map-container" style={{ height: '400px' }} />;

};

export default BingMap;