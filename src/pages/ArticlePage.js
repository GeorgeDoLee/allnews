import React, { useEffect, useState } from 'react'
import MainLayout from '../components/MainLayout'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const RelatedArticles = () => {
  const { data: articles, isLoading, error} = useFetch('/articleGroups')
  return (
    <div className='grid grid-cols-6 gap-3'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {articles && articles.map((article, index) => (
        <div key={index} className='border-2 rounded-md border-dark'>
          <div className='w-full h-[150px] bg-dark' />
          <h1 className='p-2 text-sm text-dark'>
            {article.title}
          </h1>
        </div>
      ))}
    </div>
  )
}

const ArticlePage = () => {
    const { id } = useParams()
    const {data: article, isLoading, error} = useFetch(`/articleGroups/${id}`)
    const [subArticles, setSubArticles] = useState(null);
    const [positionFilter, setPositionFilter] = useState(null);
    const positions = [
      { 
        title: "all publishers",
        value: null
      }, 
      { 
        title: "opposition",
        value: "opp"
      },
      { 
        title: "center",
        value: "center"
      },
      { 
        title: "government",
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
      <section className='flex flex-col gap-5 px-10 py-5'>
        <div className='flex justify-between gap-5'>
          <div className='flex flex-col w-1/2 gap-5'>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {article && 
                <div className=''>
                  <div className='rounded-md bg-dark h-[350px]' />
                  <h1 className='mt-2 text-lg font-semibold text-dark'>
                    {article.title}
                  </h1>
                </div>
            }
          </div>
          
          <div className='flex flex-col w-1/2 gap-3'>
            <div className='flex gap-2'>
              {positions.map((position, index) => (
                <button  
                  key={index}
                  onClick={() => setPositionFilter(position.value)}
                  className={`px-2 py-1 text-sm border-2 rounded-md 
                    border-dark text-dark ${position.value === positionFilter ? 'opacity-100' : 'opacity-50'}`}
                >
                  {position.title}
                </button>
              ))}
            </div>
            
            {subArticles && subArticles.map((subArticle, index) => (
              <a 
                key={index}
                href={subArticle.url}
                className='p-4 rounded-md bg-opacity-10 bg-dark text-dark'
              >
                <p className='px-2 py-1 text-base italic border-2 rounded-md border-dark w-fit'>{subArticle.publisher.name}</p>
                <h1 className='mt-2 text-base'>{subArticle.title}</h1>
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h1 className='mb-2 text-lg font-semibold text-dark'>Related Articles</h1>
          <RelatedArticles />
        </div>
      </section>
    </MainLayout>
  )
}

export default ArticlePage
