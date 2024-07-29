import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/imgsWeb/logo.png'
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const FooterLinks = [

            {
                name: 'Nosotros',
                link: '/nosotros'
            },
            {
                name: 'Cursos',
                link: '/cursos'
            },
            {
                name: 'Blog',
                link: '/blog'
            },
            {
                name: 'Contacto',
                link: '/contacto'
            }
]

const OtherLinks = [
    {
        name: 'Términos y Condiciones',
        link: '/terminos',
    },
    {
        name: 'Políticas de Privacidad',
        link: '/politicas',
    },
    {
        name: 'Preguntas Frecuentes',
        link: '/preguntas',
    },
]

export const Footer = () => {
  return (
    <div className='mt-12 bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* Pecursos Detalles */}
                <div className='py-8 px-4'>
                <a href='#'
                        className=' font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={logo} alt="PeCursos"
                            className='w-10'/>
                            PeCursos
                        </a>
                        <p className='text-gray-500 lg:pr-24 pt-3'>
                        Descubre 
                        nuevas habilidades y crece profesionalmente 
                        con nuestra amplia gama de cursos diseñados para inspirar y capacitar.
                        </p>
                </div>
                {/* Footer Links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='font-bold text-2xl sm:text-2xl flex gap-2 sm:text-left mb-3'>Links útiles</h1>
                        <ul className='space-y-2 '>
                            {
                                FooterLinks.map(
                                    (data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-500 hover:text-gray-800 duration-300'>
                                                {data.name}
                                            </a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                    <div className='py-8 px-4'>
                        <h1 className='font-bold text-2xl sm:text-2xl flex gap-2 sm:text-left mb-3'>Guia</h1>
                        <ul className='space-y-2 '>
                            {
                                OtherLinks.map(
                                    (data, index) => (
                                        <li key={index}>
                                            <a href={data.link} className='text-gray-500 hover:text-gray-800 duration-300'>
                                                {data.name}
                                            </a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                    {/*Contact links */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='font-bold text-2xl sm:text-2xl flex gap-2 sm:text-left mb-3'>Contacto</h1>
                    <div>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow/>
                            <p>Perú, Lambayeque</p>
                        </div>
                        <div className='flex items-center gap-3 mt-6'>
                            <FaMobileAlt/>
                            <p>+51 987 654 321</p>
                        </div>
                        {/*Social links */}
                        <div className='flex items-center gap-3 mt-4'>
                            <a href="https://www.instagram.com" target='_blank' >
                                <FaInstagram 
                                className='text-3xl text-gray-500 hover:text-primary duration-300'
                                />
                            </a>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <FaFacebook 
                                className='text-3xl text-gray-500 hover:text-primary duration-300'
                                />
                            </a>
                            <a href="https://x.com/Inicio/" target='_blank'>
                                <FaTwitter 
                                className='text-3xl text-gray-500 hover:text-primary duration-300'
                                />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
