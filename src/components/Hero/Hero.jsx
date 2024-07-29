import React from 'react'
import Slider from "react-slick";
import Image1 from '../../assets/imgsWeb/Image1.png'
import Button from '../shared/Button';

const Herodata = [
    {
        id: 1,
        img: Image1, 
        subtitle: 'Software',
        title: 'Desarrollador',
        title2: 'Backend',
    },
    {
        id: 2,
        img: Image1,
        subtitle: "Diseño Gráfico",
        title: "Diseñador",
        title2: "Gráfico ",
    },
    {
        id: 3,
        img: Image1,
        subtitle: "Música",
        title: "Productor",
        title2: "Musical",
    },
    {
        id: 4,
        img: Image1,
        subtitle: "Dibujo",
        title: "Artista",
        title2: "Dibujo ",
    },
]
const Hero = () => {
    const Settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
        slidesToShow: 1,
        autoplay: true,
    };

    return (
    <div className='container mt-12'>
        <div className='overflow-hidden rounded-3xl min-h[500px] sm:min-h[650px] hero-bg-color flex justify-center items-center w-full'>
            <div className='container pb-8 sm:pb-0'>
            {/* Seccion hero */}
            <Slider {...Settings}>
                {
                    Herodata.map((data) => (
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* text content section */}
                                <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left
                                order-2 sm:order-1 relative z-10 '>
                                    <h1 data-aos="zoom-in" 
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                    className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                                    <h1
                                    data-aos="zoom-out" 
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                    <h1 
                                    data-aos="zoom-out" 
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                    <div
                                    data-aos="fade-up"
                                    data-aos-offset="0"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    data-aos-delay="300"
                                    >
                                        <Button text='Comprar ahora' bgColor='bg-primary' textColor='text-white'/>
                                    </div>
                                </div>
                                {/* img section */}
                                <div 
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-once="true"
                                data-aos-delay="300"
                                className='order-1 sm:order-2'>
                                <img src={data.img} alt="" 
                                className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain
                                mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.5)] relative z-40' //Podemos usar la clase 'sm:w-[450px] sm:h-[450px]' para el tamaño de la imagen
                                />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
            </div>
        </div>
    </div>
)
}

export default Hero