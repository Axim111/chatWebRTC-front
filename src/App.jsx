import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import {NotFound} from "./pages/notFound/notFound"
import {User} from "./pages/main/user"
import {Room} from "./pages/room/room"

function App() {

  return <>
     <Routes>
          <Route path="/" element={<User />} />
          <Route path="/room/:id" element={<Room />} />
          <Route path="/*" element={<NotFound />} />
    </Routes>
  </>
   
 
  
  
}
export default App
