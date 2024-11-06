import React, { useEffect, useState } from 'react'
import useFetch from "../hooks/useFetch"

const PublisherRenderer = ({publishers}) => {
    return (
        <div className='flex flex-col gap-3'>
            {publishers.map((publisher, index) => (
                <>
                    {publisher.logo ? 
                        <img 
                            src={publisher.logo}
                            alt={publisher.name} 
                            className="object-contain w-12 h-12 rounded-full"
                        /> 
                        :
                        <div className='w-12 h-12 rounded-full bg-dark' />
                    }
                </>
            ))}
        </div>
    )
}

const PublisherBar = () => {
    const { data: publishers, isLoading, error } = useFetch('https://localhost:7040/api/Publisher');
    const [govPublishers, setGovPublishers] = useState(null);
    const [centerPublishers, setCenterPublishers] = useState(null);
    const [oppPublishers, setOppPublishers] = useState(null);

    useEffect(() => {
        if (publishers) {
            setGovPublishers([]);
            setCenterPublishers([]);
            setOppPublishers([]);

            publishers.forEach(publisher => {
                switch (publisher.position) {
                    case 'gov':
                        setGovPublishers(prev => [...prev, publisher]);
                        break;
                    case 'center':
                        setCenterPublishers(prev => [...prev, publisher]);
                        break;
                    case 'opp':
                        setOppPublishers(prev => [...prev, publisher]);
                        break;
                    default:
                        break;
                }
            });
        }
    }, [publishers]);
    
  return (
    <div className='w-full'>
        <h1 className='mb-3 text-lg font-semibold font-firago case-on'>მედია</h1>
        <div className='flex flex-col gap-1 p-4 rounded-md bg-opacity-10 bg-dark font-firago'>
            <div className='flex justify-between w-full gap-2 mt-2'>
                {isLoading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                <div className='p-2 bg-opacity-50 rounded-full bg-opp'>
                    {oppPublishers && <PublisherRenderer publishers={oppPublishers} />}
                </div>
                <div className='p-2 bg-center rounded-full'>
                    {centerPublishers && <PublisherRenderer publishers={centerPublishers} />}
                </div>
                <div className='p-2 bg-opacity-50 rounded-full bg-gov'>
                    {govPublishers && <PublisherRenderer publishers={govPublishers} />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PublisherBar
