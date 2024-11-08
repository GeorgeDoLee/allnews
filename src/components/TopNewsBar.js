import React from 'react'
import useFetch from '../hooks/useFetch'


const TopNewsBar = () => {
    const {data: articles, isLoading, error} = useFetch('https://localhost:7040/api/Article')

  return (
    <section className='w-full'>
        <h1 className='mb-3 text-xl font-semibold font-firago case-on'>ტრენდული ამბები</h1>

        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        <div className='flex flex-col gap-5 text-dark font-firago'>
            {articles && articles.slice(0, 5).map((article, index) => (
                <div key={index} >
                    <h1 className='text-sm line-clamp-3 case-on'>{article.title}</h1>
                    <div className='flex items-center gap-2 mt-1'>
                        <div className='flex w-1/4 h-2'>
                            <div className='w-[32%] h-full bg-red-800' />
                            <div className='w-[25%] h-full bg-dark bg-opacity-50' />
                            <div className='w-[43%] h-full bg-blue-800' />
                        </div>
                        <p className='text-xs'>43% ოპოზიციური წყარო</p>
                    </div>
                </div>
            ))}

        </div>
    </section>
  )
}

export default TopNewsBar
