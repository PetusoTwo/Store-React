import React from 'react'
import { Heading } from '../shared/Heading'
import { ProductCard } from './ProductCard'
import img from '../../assets/imgsWeb/img.png'
import Aos from 'aos'
import { Link } from 'react-router-dom'
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
    {
        id: 9,
        img: img,
        title: "Desarrollo Web",
        price: "$30",
        aosDelay: "1600",
    },
    {
        id: 10,
        img: img,
        title: "Desarrollador Full Stack",
        price: 100,
        aosDelay: "1800",
    },
    {
        id: 11,
        img: img,
        title: "Dibujo Digital",
        price: 200,
        aosDelay: "2000",
    },
    {
        id: 12,
        img: img,
        title: "Dibujo a Mano",
        price: 90,
        aosDelay: "2200",
    },
    {
        id: 13,
        img: img,
        title: "Curso 5",
        price: 100,
        aosDelay: "2400",
    },
    {
        id: 14,
        img: img,
        title: "Curso 6",
        price: 100,
        aosDelay: "2600",
    },
    {
        id: 15,
        img: img,
        title: "Curso 7",
        price: 100,
        aosDelay: "2800",
    },
    {
        id: 16,
        img: img,
        title: "Curso 8",
        price: 100,
        aosDelay: "3000",
    },
    {
        id: 17,
        img: img,
        title: "Desarrollo Web",
        price: "$30",
        aosDelay: "3200",
    },
    {
        id: 18,
        img: img,
        title: "Desarrollador Full Stack",
        price: 100,
        aosDelay: "3400",
    },
    {
        id: 19,
        img: img,
        title: "Dibujo Digital",
        price: 200,
        aosDelay: "3600",
    },
    {
        id: 20,
        img: img,
        title: "Dibujo a Mano",
        price: 90,
        aosDelay: "3800",
    },
    {
        id: 21,
        img: img,
        title: "Curso 5",
        price: 100,
        aosDelay: "4000",
    },
    {
        id: 22,
        img: img,
        title: "Curso 6",
        price: 100,
        aosDelay: "4200",
    },
    {
        id: 23,
        img: img,
        title: "Curso 7",
        price: 100,
        aosDelay: "4400",
    },
    {
        id: 24,
        img: img,
        title: "Curso 8",
        price: 100,
        aosDelay: "4600",
    },
]

const Products = () => {
    return (
    <div
    data-aos="zoom-in"
    data-aos-duration="4000">
        <div
        className='container pt-10'>
              {/* Header Section */}
            <Heading title="Nuestros Cursos" subtitle={"Cursos Disponibles"}/>
              {/* Body section */}
            <ProductCard data={ProductsData}/>
        </div>
    </div>
    )
}

export { Products }