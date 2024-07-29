import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import SectionServices from './components/SectionServices/SectionServices';
import SectionAllCursos from './components/SectionAllCursos/SectionAllCursos';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Hero' element={<Hero />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/Services' element={<SectionServices />} />
          {/* <Route path='/Programacion' element={} />
          <Route path='/Dibujo' element={} />
          <Route path='/Diseno' element={} />
          <Route path='/Musica' element={} /> */}
          <Route path='/AllCourses' element={<SectionAllCursos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
