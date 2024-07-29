import React from 'react'
import { FaCode } from "react-icons/fa";
import { MdOutlineDraw } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CardCursosPP } from './CardCursosPP';

const cardData = [
    {
        img: "https://via.placeholder.com/300",
        title: "Desarrollo Web",
        categoria: "Programacion",
        description: "Aprende a crear una web con HTML, CSS y JavaScript. Ademas de cientos de libros en español para aprender.",
        icon: <FaCode />
    },
    {
        img: "https://via.placeholder.com/300",
        title: "Productor Musical",
        categoria: "Musica",
        description: "Aprende a crear una web con HTML, CSS y JavaScript.",
        icon: <IoIosMusicalNotes />
    },
    {
        img: "https://via.placeholder.com/300",
        categoria: "Diseño Grafico",
        title: "Desarrollo Web",
        description: "Aprende a crear una web con HTML, CSS y JavaScript.",
        icon: <MdOutlineDesignServices />
    }
]

export const CursosPP = () => {
return (
    <div className='py-10 mt-12 bg-gradient-to-r  dark:text-white rounded-2xl
    mx-4 sm:mx-8 lg:mx-16'>
        <div className="container">
            {/* Header Section */}
            <div className='flex justify-between'>
                <h1 
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-once="true"
                className='text-3xl font-bold'>Nuevos Cursos</h1>
                <div className='flex gap-4 items-center'>
                    <div 
                    data-aos="fade-down"
                    data-aos-duration="800"
                    data-aos-once="true"
                    className='flex gap-4 items-center'>
                    <FaCode className='text-xl cursor-pointer' />
                    <MdOutlineDraw className='text-xl cursor-pointer'/>
                    <MdOutlineDesignServices className='text-xl cursor-pointer' />
                    <IoIosMusicalNotes className='text-xl cursor-pointer'/>
                    </div>
                <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3
                        hover:scale-105 duration-500'>
                Explorar
                </button>
                </div>
            </div>
            {/* Seccion de las cartas de los nuevos cursos */}
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-6 my-8'>
                {/* Cards seccion */}
                <div 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
                data-aos-anchor-placement="top-bottom"
                className='col-span-3 grid grid-cols-1 gap-6'> {/*css alternativo: col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 */}
                {cardData.map((data, index) => (
                    <CardCursosPP key={index} {...data}/>
                ))}
                </div>
                {/* Texto de no te lo pierdas */}
                <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
                className='col-span-1 col-start-4 row-start-1'>
                <div className='flex flex-col items-center h-full justify-center bg-gray-400/50 rounded-xl p-4 bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800
                space-y'>
                    <FaRegUser className='bg-orange-400/10 p-2 mb-4 rounded-lg h-[40px] w-[40px]' />
                    <h2
                    className='text-2xl font-semibold text-center mb-2'>No te los pierdas</h2>
                    <p className='text-sm text-center'>
                    Aprende nuevas habilidades y mejora tus conocimientos con nuestros cursos en línea.
                    </p>
                    <label htmlFor="email">
                    <input type="email" name="email" id="email" className=' text-black bg-gray-400/50 from-gray-500/80 to-gray-100 dark:from-gray-900 dark:text-black mt-4 px-4 py-2 rounded-lg w-full placeholder:"Escribe tu correo" ' />
                    </label>
                    <button className=' mt-5 bg-gradient-to-r from-primary to-secondary text-white px-10 py-2 rounded-full flex items-center gap-3
                        hover:scale-105 duration-500'>
                    Enviar
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
)
}
