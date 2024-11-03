import React, { useEffect, useState } from 'react'
import MainLayout from '../components/MainLayout'
import useFetch from '../hooks/useFetch'
import { deletePublisher, postPublisher } from '../services/apiServices';
import { toast } from '../components/Toast';

const AdminPage = () => {
    const {data: publishers, isLoading, error, refetch} = useFetch('https://localhost:7040/api/Publisher');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [titleClass, setTitleClass] = useState('');
    const [articleClass, setArticleClass] = useState('');
    const [logo, setLogo] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const dataToSubmit = {
        name,
        logo,
        position,
        titleClass,
        articleClass,
      };

      try {
        await postPublisher(dataToSubmit);
        toast.success('მედია წარმატებით დაემატა');
        refetch();
      } catch (error) {
        toast.error(`შეცდომა: ${error.message}`);
      }
    }

    const handleDelete = async (id) => {
      try {
          await deletePublisher(id);
          toast.success('მედია წარმატებით წაიშალა');
          refetch();
      } catch (error) {
          toast.error(`შეცდომა: ${error.message}`);
      }
    };

  return (
    <MainLayout>
        <section className='px-20 py-5'>
          <div className='flex justify-between'>
            <div className='font-firago text-dark'>
                <h1 className='mb-2 text-xl case-on'>მედიები</h1>
                <div className='flex flex-col gap-2'>
                  {isLoading && <p>loading...</p>}
                  {error && <p>{error}</p>}
                  {publishers && publishers.map((publisher) => (
                    <div 
                      key={publisher.id} 
                      className='flex items-center gap-2'
                      onClick={() => handleDelete(publisher.id)}
                    >
                      <div className='w-8 h-8 rounded-full bg-dark' />
                      <h1 className='text-lg'>
                        {publisher.name}
                      </h1>

                      <button className='ml-10 text-red-500'>
                        x
                      </button>
                    </div>
                  ))}
                </div>
            </div>

            <div className='font-firago text-dark'>
              <h1 className='mb-2 text-xl case-on'>დაამატეთ მედია</h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="სახელი"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 bg-transparent border border-dark w-fit focus:outline-none"
                />
                
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="w-full px-4 py-2 bg-transparent border border-dark focus:outline-none"
                >
                  <option value="" disabled>
                    პოზიცია
                  </option>
                  <option value="gov">სამთავრობო</option>
                  <option value="center">ცენტრისტული</option>
                  <option value="opp">ოპოზიციური</option>
                </select>

                <input
                  type="text"
                  placeholder="სათაურის კლასი"
                  value={titleClass}
                  onChange={(e) => setTitleClass(e.target.value)}
                  className="px-4 py-2 bg-transparent border border-dark w-fit focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="სტატიის კლასი"
                  value={articleClass}
                  onChange={(e) => setArticleClass(e.target.value)}
                  className="px-4 py-2 bg-transparent border border-dark w-fit focus:outline-none"
                />

                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-dark w-fi"
                >
                  ატვირთვა
                </button>
              </form>
            </div>
          </div>
        </section>
    </MainLayout>
  )
}

export default AdminPage
