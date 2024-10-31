import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';

const Articles = () => {
    const {data: articles, isLoading, error} = useFetch('/articleGroups')
    
  return (
    <section>
        <div className='flex flex-col gap-5 mt-2 lg:gap-10 text-dark font-firago'>
            {isLoading && <p>loading...</p>}
            {error && <p>{error}</p>}
            {articles && articles.map((article, index) => (
                <Link 
                    to={`/article/${article._id}`}
                    key={index} 
                    className='flex flex-col-reverse items-center gap-2 rounded-md lg:gap-3 lg:flex-row text-dark'
                >
                    <div>
                        <p className='mb-1 text-xs lg:mb-2 lg:text-sm case-on'>თემა &middot; კატეგორია</p>
                        <h1 className='text-base lg:text-lg text-dark line-clamp-4'>
                            {article.title}
                        </h1>
                        <div className='flex flex-col items-start gap-1 mt-2 lg:items-center lg:gap-2 lg:flex-row'>
                            <div className='flex w-1/5 h-2'>
                                <div className='w-[43%] h-full bg-opp' />
                                <div className='w-[25%] h-full bg-center' />
                                <div className='w-[32%] h-full bg-gov' />
                            </div>
                            <p className='text-xs lg:text-sm'>43% სამთავრობო წყაროები: 25 სტატია</p>
                        </div>
                    </div>
                    <div className='lg:w-[450px] w-full bg-dark h-[200px] lg:h-[150px]' /> 
                </Link>
            ))}
            <button className='self-center px-5 py-2 text-base font-semibold border w-fit text-dark border-dark font-firago case-on'>
                მეტის ნახვა
            </button>
        </div>
    </section>
  )
}

export default Articles
