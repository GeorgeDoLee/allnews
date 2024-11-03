import React from 'react'
import useFetch from '../hooks/useFetch'

const BlindspotBar = () => {
  const {data: articles, isLoading, error} = useFetch('http://localhost:5000/api/articleGroups')

  return (
    <section className='w-full'>
        <h1 className='mb-3 text-xl font-semibold text-dark font-firago case-on'>ბრმა წერტილები</h1>
        
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        <div className='flex flex-col gap-5 text-dark font-firago'>
            {articles && articles.slice(0, 4).map((article, index) => (
                <div key={index} className={`p-2 ${index % 2 === 0 ? 'bg-opp' : 'bg-gov'} rounded-lg`} >
                    <div className='w-full h-[150px] bg-dark rounded-t-md bg-opacity-80' />
                    <div className='p-2 rounded-b-md bg-newspaper'>
                        <h1 className='text-sm font-semibold line-clamp-3 font-firago case-on'>{article.title}</h1>
                        <div className='flex items-center gap-2 mt-1'>
                            {index % 2 === 0 && 
                                <div className='flex w-1/4 h-2'>
                                    <div className='w-[85%] h-full bg-opp' />
                                    <div className='w-[10%] h-full bg-center' />
                                    <div className='w-[5%] h-full bg-blue-800' />
                                </div>
                            }
                            {index % 2 !== 0 &&
                                <div className='flex w-1/4 h-2'>
                                    <div className='w-[5%] h-full bg-opp' />
                                    <div className='w-[10%] h-full bg-center' />
                                    <div className='w-[85%] h-full bg-gov' />
                                </div>
                            }

                            <p className='text-xs font-firago'>85% {index % 2 === 0 ? 'სამთავრობო' : 'ოპოზიციური'} წყაროები</p>
                        </div>
                    </div>
                </div>
            ))}
            <button className='self-center px-4 py-2 text-base font-semibold border w-fit text-dark border-dark font-firago case-on'>
                მეტის ნახვა
            </button>
        </div>
    </section>
  )
}

export default BlindspotBar
