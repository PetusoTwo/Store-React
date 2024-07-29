import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Category from '../Category/Category'
import { CursosPP } from '../CursosPP/CursosPP'
import Products from '../Products/Products'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from '../Footer/Footer'

const Home = () => {

  const [allProducts, setAllProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [countProducts, setCountProducts] = useState(0)

  React.useEffect(() => {
    AOS.init(
      {
        duration: 900,
        easing: 'ease-in-side',
        delay: 200,
        offset: 100,
      }
    );
    AOS.refresh();
  },[]);

  return (
    <div>
        <Navbar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        />
        <Hero/>
        <CursosPP/>
        <Services/>
        <Category/>
        <Products
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        />
        <Footer/>
    </div>
  )
}

export default Home