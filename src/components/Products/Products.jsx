import React from 'react'
import { Heading } from '../shared/Heading'
import { ProductCard } from './ProductCard'
import img from '../../assets/imgsWeb/img.png'
import Aos from 'aos'
import { Link } from 'react-router-dom'
import { Boton } from '../shared/Boton'
const ProductsData = [
    {
        id: 1,
        img: img,
        title: "Desarrollo Web",
        price: "$30",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img,
        title: "Desarrollador Full Stack",
        price: 100,
        aosDelay: "200",
    },
    {
        id: 3,
        img: img,
        title: "Dibujo Digital",
        price: 200,
        aosDelay: "400",
    },
    {
        id: 4,
        img: img,
        title: "Dibujo a Mano",
        price: 90,
        aosDelay: "600",
    },
    {
        id: 5,
        img: img,
        title: "Curso 5",
        price: 100,
        aosDelay: "800",
    },
    {
        id: 6,
        img: img,
        title: "Curso 6",
        price: 100,
        aosDelay: "1000",
    },
    {
        id: 7,
        img: img,
        title: "Curso 7",
        price: 100,
        aosDelay: "1200",
    },
    {
        id: 8,
        img: img,
        title: "Curso 8",
        price: 100,
        aosDelay: "1400",
    },
]

const Products = () => {
    return (
    <div
    data-aos="zoom-in"
    data-aos-duration="1500">
        <div
        className='container'>
              {/* Header Section */}
            <Heading title="Nuestros Cursos" subtitle={"Cursos mas Vendidos"}/>
              {/* Body section */}
            <ProductCard data={ProductsData}/>
            <Boton/>
        </div>
    </div>
    )
}

export default Products