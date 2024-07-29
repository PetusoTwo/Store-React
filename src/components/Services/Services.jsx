import React from 'react'
import PaymentImage from '../../assets/imgsWeb/pago.png'
import InstantAccessImage from '../../assets/imgsWeb/access.png'
import SecureTransactionImage from '../../assets/imgsWeb/pay.png'
import Navbar from '../Navbar/Navbar'

const BeneficiosData = [
    {
        id: 1,
        img: PaymentImage,
        title: 'Opciones de Pago Flexibles',
        description: 'Elige entre una variedad de métodos de pago para hacer tu compra lo más conveniente posible.', 
    },
    {
        id: 2,
        img: InstantAccessImage,
        title: 'Acceso Instantáneo',
        description: 'Obtén acceso inmediato a tus materiales de curso al momento de la compra. ¡Sin tiempo de espera, comienza a aprender de inmediato!',
    },
    {
        id: 3,
        img: SecureTransactionImage,
        title: 'Transacciones Seguras',
        description: 'Tu seguridad es nuestra prioridad. Utilizamos las últimas tecnologías de encriptación.',
    },
];
const Services = () => {
return (
    <>
    <div className='py-10'>
        <div className='container'>
            {/* Header Section */}
            <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p
                data-aos='fade-up'
                data-aos-duration='500'
                data-aos-delay='200'
                className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Nuestros Servicios</p>
                <h1 
                data-aos='fade-up'
                data-aos-duration='500'
                data-aos-delay='300' 
                className='text-3xl font-bold py-3'>¿Por qué elegirnos?</h1>
                <p 
                data-aos='fade-up'
                data-aos-duration='500'
                data-aos-delay='400'
                className='text-xs text-gray-400'>
                    {""}
                    Ofrecemos las mejores características para que tu experiencia de aprendizaje sea lo más
                    fluida y segura posible. Aquí tienes algunas razones por las que nuestros clientes nos eligen.
                </p>
            </div>
            {/* Cards Section */}
            <div 
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='500'
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                {BeneficiosData.map(({id, img, title, description}) => {
                    return (
                        <div key={id}
                        className='max-w-[500px] group rounded-2xl bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center gap-4 p-5 shadow-lg  dark:text-white dark:bg-gray-800 
                        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 '
                        >
                            <div
                            data-aos='fade-up'
                            data-aos-duration='500'
                            data-aos-delay='500'
                            className='h-[100px]'>
                                <img src={img} alt=""
                                className='max-w-[100px] mx-auto block '
                                />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>{title}</h1>
                                <p className='text-gray-500 text-sm line-clamp-2'>{description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    </>
)
}

export default Services