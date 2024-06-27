import React, { useState } from 'react'
import { useEffect } from 'react';
import FLibrary from './FLibrary'
function Facilites() {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);

  return (
   <FLibrary />
  )
}

export default Facilites
