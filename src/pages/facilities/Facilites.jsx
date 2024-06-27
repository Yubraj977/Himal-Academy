import React, { useState } from 'react'
import { useEffect } from 'react';
import FLibrary from './FLibrary'
import Fclasses from './Fclasses'
import Fcanteen from './Fcanteen';
import Ftransportation from './Ftransportation.jsx';
import Flab from './Flab.jsx';
import Fenvironment from './Fenvironment.jsx';
function Facilites() {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
   <FLibrary />
   <Fclasses/>
   <Fcanteen/>
   <Ftransportation/>
   <Flab/>
   <Fenvironment/>
   </>
  )
}

export default Facilites
