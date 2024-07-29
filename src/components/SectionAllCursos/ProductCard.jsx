import React from 'react'
import { Buttom } from '../shared/Buttom'
const ProductCard = ({data}) => {
    
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
            {/* card section */}
            {
                data.map((data) => (
                    <div className='group' key={data.id}>
                        <div
                        data-aos-delay={data.aosDelay}
                        className='relative space-y-3'>
                            <img src={data.img} alt="" 
                            className='w-[260px] h-[180px] object-cover rounded-md group-[&:hover]:scale-105 group-[&:hover]:'
                            />
                            {/* hover button */}
                            <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center
                            rounded-md justify-center items-center duration-200 ' >
                                <Buttom
                                text={"Add to cart"}
                                bgColor={"bg-red-500"}
                                textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <h2 className='font-bold'>{data.price}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export {ProductCard};