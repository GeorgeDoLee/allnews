import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const MainArticle = () => {
    const {data: articles, isLoading, error} = useFetch('https://localhost:7040/api/Article');
    const [mainArticle, setMainArticle] = useState(null);

    useEffect(() => {
        if(articles){
            setMainArticle(articles[0]);
        }
    }, [articles]);

  return (
    <section className='w-full lg:h-[500px] h-[250px] bg-dark flex flex-col justify-end relative'>
        {isLoading && <p>იტვირთება...</p>}
        {error && <p>{error.message}</p>}
        {mainArticle &&
            <>
                {mainArticle.photo ? 
                    <img 
                        src={mainArticle.photo} alt={mainArticle.title}
                        className='absolute z-10 object-cover w-full h-full'
                     /> 
                    : 
                    null
                }
                
                <div className='z-20 px-5 py-3 lg:px-10 lg:py-5'>
                    <h1 className='text-xs font-bold text-white lg:text-2xl'> {mainArticle.title} </h1>
                    <div className='flex w-full h-3 mt-2 lg:mt-5 lg:h-8 font-firago case-on'>
                        <div 
                            style={{ width: `${mainArticle.oppCoverage}%` }}
                            className='bg-opp flex justify-center items-center text-white lg:text-base text-[7px] lg:font-semibold'
                        >
                            ოპოზიციური {mainArticle.oppCoverage}%
                        </div>
                        <div 
                            style={{ width: `${mainArticle.centerCoverage}%` }}
                            className='bg-center flex justify-center items-center text-dark lg:text-base text-[7px] lg:font-semibold'
                        >
                            ცენტრისტული {mainArticle.centerCoverage}%
                        </div>
                        <div 
                            style={{ width: `${mainArticle.govCoverage}%` }}
                            className='bg-gov flex justify-center items-center text-white lg:text-base text-[7px] lg:font-semibold'
                        >
                            სამთავრობო {mainArticle.govCoverage}%
                        </div>
                    </div>
                </div>
            </>
        }
    </section>
  )
}

export default MainArticle
