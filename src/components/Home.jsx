import React from 'react'
import Header from './Header';
import Slide from './Slide';
import Body from './Body'
import Footer from './Footer';
import { useState } from 'react';


function Home() {
   
   const [api , setApi] = useState('khungcanh')

   function handleApi(e) {
      if (e < 3) {
         setApi(arrApi[e])
      }
   }

  let arrApi = ["khungcanh" , 'baibien' , 'laudai']
    return ( 
        <>
     <Header />
     <Slide fnhandleApi={handleApi} />
     <Body elmApi={api} />
     <Footer/>
        </>
     );
}

export default Home;

