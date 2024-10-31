import React from 'react'

const MainArticle = () => {
  return (
    <section className='w-full lg:h-[500px] h-[250px] bg-dark flex flex-col justify-end'>
        <div className='px-5 py-3 lg:px-10 lg:py-5'>
            <h1 className='text-xs font-bold text-white lg:text-2xl'>
                თბილისის მერია - 23 ოქტომბრის ღონისძიებაზე დასწრების მსურველთა დიდი რაოდენობიდან გამომდინარე, 
                თბილისის ქუჩებში მოსალოდნელია გადატვირთული მოძრაობა
            </h1>
            <div className='flex w-full h-3 mt-2 lg:mt-5 lg:h-8 font-firago case-on'>
                <div className='w-[32%] bg-opp flex justify-center items-center text-white lg:text-md text-[7px] lg:font-semibold'>
                    ოპოზიციური 32%
                </div>
                <div className='w-[25%] bg-center flex justify-center items-center text-dark lg:text-md text-[7px] lg:font-semibold'>
                    ცენტრისტული 25%
                </div>
                <div className='w-[43%] bg-gov flex justify-center items-center text-white lg:text-md text-[7px] lg:font-semibold'>
                    სამთავრობო 43%
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainArticle
