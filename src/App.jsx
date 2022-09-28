import React from 'react'
import {Routes , Route} from 'react-router-dom'
import All from './Component/All'
import Navbar from './Component/Navbar'
import Store from './Component/Store'
import Contact from './Component/Contact'
import Category from './Component/Category'
import NotFound from './Component/NotFound'

import ShopProviderContext from "./Component/Global";
import Footer from './Component/Footer'
import ShopDetalis from './Component/ShopDetalis'
import Others from './Component/Others'
import Othersdetails from './Component/Othersdetails'
import Loading from './Component/Loading'
import AllContextProvider from './Component/Allothers'


export default function App() {
  return (
    <>
    <ShopProviderContext>
      <AllContextProvider>
        <Loading/>
        <Navbar/>
        <Routes>
          <Route path='' element={<All/>}/>
          <Route path='all' element={<All/>}/>
          <Route path='store' element={<Store/>}/>
          <Route path='shopdetalis' element={<ShopDetalis/>}>
            <Route path=':id' element={<ShopDetalis/>}/>
          </Route>
          <Route path='categories' element={<Category/>}/>
          <Route path='others' element={<Others/>}/>
          <Route path='othersdetails' element={<Othersdetails/>}>
            <Route path=':id' element={<Othersdetails/>} />
          </Route>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </AllContextProvider>
    </ShopProviderContext>
    </>
  )
}
