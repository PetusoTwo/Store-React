import React from 'react'



const CardCursosPP = ({img, title, description, icon, categoria}) => {
return (
    <>
    <div className=' sm:col-span-3'>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                        <div
                        >
                            <img src={img} alt="" 
                            className='w-full h-[200px] object-cover rounded-xl'
                            />
                        </div>
                        <div className='sm:col-span-2'>
                            <div className='inline-flex py-1 mb-3 px-4 gap-2 items-center bg-gray-400/20 p-2 rounded-xl'>
                            {icon}
                            {categoria}
                            </div>
                            {/* icon */}
                            <h1>
                            {title}
                            </h1>
                            <p className='text-sm'>
                            {description}
                            </p>
                        </div>
                    </div>
                </div>
    </>
)
}

export { CardCursosPP };