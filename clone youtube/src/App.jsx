import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Search from './components/Search'
import PlayingVideo from './components/PlayingVideo'
import Loading from './loader/Loading'
import { useAuth } from './context/Authprovider'


function App() {
   const {loading} = useAuth();
  return (
    <div>
      {loading && <Loading/>}
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search/:SearchQuery" element={<Search />} />
      <Route path="/video/:id" element={<PlayingVideo/>} />
     </Routes>
    </div>
  )
}
 
export default App

