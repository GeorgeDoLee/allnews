import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom';

const Article = ({ article, isBlindspot }) => {
    const [mostCoverage, setMostCoverage] = useState({ percentage: 0, position: '' });

    useEffect(() => {
        const { govCoverage, centerCoverage, oppCoverage } = article;

        if (govCoverage >= centerCoverage && govCoverage >= oppCoverage) {
            setMostCoverage({ percentage: govCoverage, position: 'სამთავრობო' });
        } else if (oppCoverage >= centerCoverage && oppCoverage >= govCoverage) {
            setMostCoverage({ percentage: oppCoverage, position: 'ოპოზიციური' });
        } else {
            setMostCoverage({ percentage: centerCoverage, position: 'ცენტრისტული' });
        }
    }, [article.govCoverage, article.centerCoverage, article.oppCoverage]);

    return (
        <Link 
            to={`/article/${article.id}`} 
            key={article.id} 
            className={`${isBlindspot ? Math.random() * 10 % 2 === 0 ? 'bg-gov' : 'bg-opp' : 'bg-transparent'} 
            ${isBlindspot ? 'p-2' : ''} 
            w-[full] flex justify-between flex-col-reverse items-center gap-2 rounded-md lg:gap-3 lg:flex-row text-dark`}
        >
            <div className={`${isBlindspot ? 'bg-newspaper rounded-md p-2' : 'bg-transparent'} w-full`}>
                <p className='mb-1 text-xs lg:mb-2 lg:text-sm case-on'>თემა &middot; კატეგორია</p>
                <h1 className='text-base lg:text-lg text-dark line-clamp-4'>
                    {article.title}
                </h1>
                
                <div className='flex flex-col items-start gap-1 mt-2 lg:items-center lg:gap-2 lg:flex-row'>
                    <div className='flex w-1/5 h-2'>
                        <div style={{ width: `${article.oppCoverage}%` }} className="h-full bg-opp" />
                        <div style={{ width: `${article.centerCoverage}%` }} className="h-full bg-center" />
                        <div style={{ width: `${article.govCoverage}%` }} className="h-full bg-gov" />
                    </div>
                    <p className='text-xs lg:text-sm'>
                        {mostCoverage.percentage}% {mostCoverage.position} წყაროები: {article.subArticleCount} სტატია
                    </p>
                </div>
            </div>
            {article.photo ? 
                <img 
                    src={article.photo} 
                    alt={article.title} 
                    className='w-[250px] h-auto'
                />
                :
                <div className='lg:w-[250px] w-full bg-dark h-[200px] lg:h-auto' /> 
            }
        </Link>
    );
}

const Articles = ({isBlindspot = false}) => {
    const {data: articles, isLoading, error} = useFetch('https://localhost:7040/api/Article')

    useEffect(() => {
        if(articles){
            console.log(articles, 1);
        }
    }, [articles]);
    
  return (
    <section>
        <div className='flex flex-col gap-5 mt-2 lg:gap-10 text-dark font-firago'>
            {isLoading && <p>loading...</p>}
            {error && <p>{error}</p>}
            {articles && articles.map((article) => (
                <Article article={article} isBlindspot={isBlindspot} />
            ))}
            <button className='self-center px-5 py-2 text-base font-semibold border w-fit text-dark border-dark font-firago case-on'>
                მეტის ნახვა
            </button>
        </div>
    </section>
  )
}

export default Articles
