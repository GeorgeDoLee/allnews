import React from 'react'
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { toast } from './Toast';
import { deletePublisher } from '../services/apiServices';

const PublisherManager = () => {
    const {data: publishers, isLoading, error} = useFetch('https://localhost:7040/api/Publisher');

    const handleDelete = async (id, name) => {
        if(window.confirm(`ნამდვილად გსურთ წაშალოთ ${name}?`)){
            try {
                await deletePublisher(id);
                toast.success('მედია წაიშალა წარმატებით')
            } catch (error) {
                toast.error('მოხდა შეცდომა')
            }
        }
    }

  return (
    <div className='flex flex-col gap-5'>
        <Link to="/admin/publisher" className='self-start px-4 py-2 text-base border border-dark text-dark'>მედიის დამატება</Link>

        <div className='border-b border-dark'></div>
        
        <div>
            <h1 className='mb-2 text-lg font-semibold font-firago case-on text-dark'>მედია</h1>
            <div className='grid grid-cols-8 gap-2'>
                {isLoading && <p>იტვირთება...</p>}
                {error && <p>{error}</p>}
                {publishers && Array.from({length: 11}).map(() => publishers.map((publisher) => (
                    <div
                        key={publisher.id}
                        className='flex flex-col gap-2 p-2 border w-fit border-dark'
                    >
                        <div className='flex items-center gap-2'>
                            <div className='w-12 h-12 rounded-full bg-dark' />
                            <h1 className='text-lg text-dark font-firago'>{publisher.name}</h1>
                        </div>

                        <div className='border-b border-dark' />
                        
                        <div className='flex justify-between gap-10 font-firago text-dark'>
                            <Link to={`/admin/publisher/${publisher.id}`} className='text-xs'>განახლება</Link>
                            <button onClick={() => handleDelete(publisher.id, publisher.name)} className='text-xs text-red-500'>წაშლა</button>
                        </div>
                    </div>
                )))}
            </div>
        </div>
    </div>
  )
}

export default PublisherManager
