import React from 'react'

function ShowProduts() {
  return (
    <div className='pt-16 '>
        <div className='bg-white flex  h-[100px] relative '>
            <div className='m-1  md:my-5 md:mx-12 flex flex-col justify-center items-center'>
                <img className='h-6 w-6  md:h-12  md:w-12' src='https://rukminim2.flixcart.com/flap/68/68/image/22fddf3c7da4c4f4.png?q=100'/>
                <p className='text-xs md:text-xl'>Mobiles</p>
            </div>
            <div className='m-1 mx-2 md:my-5 md:mx-20 flex flex-col justify-center items-center'>
                <img className='h-6 w-6  md:h-12  md:w-12' src='https://rukminim2.flixcart.com/fk-p-flap/68/68/image/0d75b34f7d8fbcb3.png?q=100'/>
                <p className='text-xs md:text-xl'>Fasion</p>
            </div> 
            <div className='m-1 mx-2 md:my-5 md:mx-20 flex flex-col justify-center items-center'>
                <img className='h-6 w-6  md:h-12  md:w-12' src='https://rukminim2.flixcart.com/flap/68/68/image/69c6589653afdb9a.png?q=100'/>
                <p className='text-xs md:text-xl'>Electronics</p>
            </div>
            <div className='m-1 mx-2 md:my-5 md:mx-20 flex flex-col justify-center items-center'>
                <img className='h-6 w-6  md:h-12  md:w-12' src='https://rukminim2.flixcart.com/flap/68/68/image/ab7e2b022a4587dd.jpg?q=100'/>
                <p className='text-xs md:text-xl'> Furniture</p>
            </div>
            <div className='m-1 mx-2 md:my-5 md:mx-20 flex flex-col justify-center items-center'>
                <img className='h-6 w-6  md:h-12  md:w-12' src='https://rukminim2.flixcart.com/fk-p-flap/68/68/image/0139228b2f7eb413.jpg?q=100'/>
                <p className='text-xs md:text-xl '>Appliance</p>
            </div>
            <div className='m-1 mx-2 md:my-5 md:mx-20 flex flex-col justify-center items-center'>
                <img className='h-6 w-6  md:h-12  md:w-12' src='https://rukminim2.flixcart.com/flap/68/68/image/dff3f7adcf3a90c6.png?q=100'/>
                <p className='text-xs md:text-xl'>Toys</p>
            </div>
        </div>
    </div>
  )
}

export default ShowProduts