import React from 'react'

const MainArticle = () => {
  return (
    <section className='w-full h-[500px] bg-dark flex flex-col justify-end'>
        <div className='px-10 py-5'>
            <h1 className='text-2xl font-bold text-white'>
                თბილისის მერია - 23 ოქტომბრის ღონისძიებაზე დასწრების მსურველთა დიდი რაოდენობიდან გამომდინარე, 
                თბილისის ქუჩებში მოსალოდნელია გადატვირთული მოძრაობა
            </h1>
            <div className='flex w-full h-8 mt-5 font-firago case-on'>
                <div className='w-[32%] bg-opp flex justify-center items-center text-white text-md font-semibold'>
                    ოპოზიციური 32%
                </div>
                <div className='w-[25%] bg-center flex justify-center items-center text-dark text-md font-semibold'>
                    ცენტრისტული 25%
                </div>
                <div className='w-[43%] bg-gov flex justify-center items-center text-white text-md font-semibold'>
                    სამთავრობო 43%
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainArticle
