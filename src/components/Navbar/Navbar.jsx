import React from 'react'
import logo from '../../assets/imgsWeb/logo.png'
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoCodeOutline } from "react-icons/io5";
import { MdOutlineDraw } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { IoMusicalNotes } from "react-icons/io5";
import DarkMode from '../../components/Navbar/DarkMode';
import {Link} from 'react-router-dom'; 
import { useState } from 'react';
const Menu = [
    {
        id: 1,
        name: 'Home',
        link: '/',
    },
    {
        id: 2,
        name: 'About',
        link: '/Services',
    },
]
const DropdownLinks = [
    {
        name: 'Programación',
        link: '/Programacion',
        icon: <IoCodeOutline />,
    },
    {
        name: 'Dibujo',
        link: '/Dibujo',
        icon: <MdOutlineDraw />,
    },
    {
        name: 'Diseño Grafico',
        link: '/Diseno',
        icon: <SiMaterialdesignicons />,
    },
    {
        name: 'Musica',
        link: '/Musica',
        icon: <IoMusicalNotes />,
    },
]

const Navbar = ({allProducts, setAllProducts}) => {

    const [active, setActive] = useState(false)

    return (
        <div className='shadow-lg bg-gray-100 dark:bg-gray-800 dark:text-white duration-100 '>
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center"> {/* Cambié "item-center" a "items-center" */}
                    <div className="flex items-center"> {/* Asegurarse de que el logo y el texto estén alineados */}
                        <a href='#'
                        className='font-bold text-2xl sm:text-3xl flex gap-2'>
                            <img src={logo} alt="PeCursos"
                            className='w-10'/>
                            PeCursos
                        </a>
                    </div>
                    <div className='flex items-center justify-between gap-4 sm:flex'>
                        {/* Modo oscuro */}
                        <div>
                            <DarkMode/>
                        </div>
                        <ul className=' items-center gap-4 hidden sm:flex'> {/* Cambié "items-center" para centrar verticalmente */}
                            {
                                Menu.map((menu) => (
                                    <li key={menu.id}>
                                        <Link to={menu.link}
                                        className='inline-block
                                        py-4 px-4 hover:text-primary duration-700'>{menu.name}</Link>
                                    </li>
                                ))
                            }
                            {/* dropdown section */}
                            <li className='group relative cursor-pointer'>
                                <a href="/#"
                                className='flex h-[72px] items-center gap[2px]'> {/* Cambié "gap[2px]" a "gap-2" */}
                                    Cursos
                                    <span>
                                        <FaCaretDown className='transition duration-300 group-hover:rotate-180' />
                                    </span>
                                </a>
                                {/* Dropdowm links section */}
                                <div
                            className='absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md
                            w-[150px] bg-gradient-to-r  dark:from-gray-900 dark:to-gray-800'>
                                <ul>
                                    {
                                        DropdownLinks.map((data) => (
                                            <li key={data.name} >
                                                <Link to={data.link}
                                                className='inline-block w-full p-2 rounded-md hover:bg-primary
                                                   dark:hover:bg-primary dark:text-white duration-300' // Aqui esta es la parte de los cursos de la navbar
                                                >{data.name}
                                                {/* {data.icon} */}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            </li>
                        </ul>
                        
                        <div className="container-icon">
				<div className="container-cart-icon" onClick={() => setActive(!active)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="icon-cart"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
					<div className="count-products">
						<span id="contador-productos">0</span>
					</div>
				</div>

				<div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
					{
                        allProducts.length ? (
                            <>
                            <div className="row-product hidden">
						<div className="cart-product">
							<div className="info-cart-product">
								<span className="cantidad-producto-carrito">1</span>
								<p className="titulo-producto-carrito">Zapatos Nike</p>
								<span className="precio-producto-carrito">$80</span>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="icon-close"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</div>
					</div>

					<div className="cart-total hidden">
						<h3>Total:</h3>
						<span className="total-pagar">$200</span>
					</div>
                            </>
                        ) : (
                            <p className="cart-empty">El carrito está vacío</p>
                        )
                    }
					
				</div>
			</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
//MINUTO 33 DEL PROYECTO