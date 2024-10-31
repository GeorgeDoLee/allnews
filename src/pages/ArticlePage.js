import React, { useEffect, useState } from 'react'
import MainLayout from '../components/MainLayout'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import MainArticle from '../components/MainArticle'
import Articles from '../components/Articles'
import PublisherBar from '../components/PublisherBar'

const ArticlePage = () => {
    const { id } = useParams()
    const {data: article, isLoading, error} = useFetch(`/articleGroups/${id}`)
    const [subArticles, setSubArticles] = useState(null);
    const [positionFilter, setPositionFilter] = useState(null);
    const positions = [
      { 
        title: "ყველა",
        value: null
      }, 
      { 
        title: "ოპოზიციური",
        value: "opp"
      },
      { 
        title: "ცენტრისტული",
        value: "center"
      },
      { 
        title: "სამთავრობო",
        value: "gov"
      },
    ]

    useEffect(() => {
        if(article && article.articles){
          setSubArticles(article.articles);
        }
    }, [article]);

    useEffect(() => {
      if(positionFilter){
        const filteredSubArticles = article.articles.filter((subArticle) => subArticle.publisher.position === positionFilter)
        setSubArticles(filteredSubArticles);
      } else if(article && article.articles) {
        setSubArticles(article.articles)
      }
    }, [positionFilter])

  return (
    <MainLayout>
      <section className='px-20 py-5'>
        <div className='flex justify-between gap-5'>
          <div className='flex flex-col w-[65%] gap-5'>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className='flex flex-col w-full gap-5'>
              {article && 
                  <MainArticle />
              }
              <div className='flex flex-col gap-5 font-firago text-dark'>
                {Array.from(['ოპოზიციური მედია', 'ცენტრისტული მედია', 'სამთავრობო მედია']).map((item, index) => (
                  <div key={index}>
                    <h1 className='mb-2 text-base font-semibold case-on'>{item}</h1>
                    <ul className='flex flex-col gap-2 pl-6 list-disc'>
                      <li className='text-base'>
                        თბილისის მერია - 23 ოქტომბრის ღონისძიებაზე დასწრების მსურველთა დიდი რაოდენობიდან გამომდინარე, 
                        თბილისის ქუჩებში მოსალოდნელია გადატვირთული მოძრაობა
                      </li>
                      <li className='text-base'>
                        თბილისის მერია - 23 ოქტომბრის ღონისძიებაზე დასწრების მსურველთა დიდი რაოდენობიდან გამომდინარე, 
                        თბილისის ქუჩებში მოსალოდნელია გადატვირთული მოძრაობა
                      </li>
                      <li className='text-base'>
                        თბილისის მერია - 23 ოქტომბრის ღონისძიებაზე დასწრების მსურველთა დიდი რაოდენობიდან გამომდინარე, 
                        თბილისის ქუჩებში მოსალოდნელია გადატვირთული მოძრაობა
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className='border-b border-dark' />
            
            <div className='w-full'>
              <Articles />
            </div>
          </div>
            
          <div className='border-r border-dark' />

          <div className='flex flex-col w-[35%] gap-5'>
            <PublisherBar />
            
            <div className='border-b border-dark' />
            
            <div>
              <div className='flex justify-around w-full gap-1 p-2 bg-dark bg-opacity-10'>
                {positions.map((position, index) => (
                  <>
                    <button  
                      key={index}
                      onClick={() => setPositionFilter(position.value)}
                      className={`px-2 py-1 text-sm rounded-sm case-on font-firago
                        ${position.value === positionFilter ? 'bg-opacity-100 text-white' : 'bg-opacity-0'}
                        ${position.value === 'opp' ? ' bg-opp' : ''}
                        ${position.value === 'center' ? ' bg-center' : ''}
                        ${position.value === 'gov' ? ' bg-gov' : ''}
                        ${position.value === null ? ' bg-dark' : ''}`
                      }
                    >
                      {position.title}
                    </button>
                    <div className='border-r last-of-type:hidden border-dark' />
                  </>
                ))}
              </div>
              
              <div className='flex flex-col gap-5 mt-5 font-firago'>
                {subArticles && subArticles.map((subArticle, index) => (
                  <a 
                    key={index}
                    href={subArticle.url}
                    className='p-4 rounded-md bg-dark bg-opacity-10'
                  >
                    <p className='mb-2 text-xs w-fit case-on'>
                      {subArticle.publisher.name}
                    </p>

                    <div className='mb-2 border-b border-dark'/>
                    
                    <h1 className='text-sm line-clamp-3 text-dark'>
                      {subArticle.title}
                    </h1>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default ArticlePage
