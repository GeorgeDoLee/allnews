import React from 'react'
import Logo from './Logo'

const List = ({title, list}) => {
    return (
        <div>
            <h1 className='mb-3 text-lg font-semibold case-on'>{title}</h1>
            <ul className='flex flex-col gap-1'>
                {list && list.map((item, index) => (
                    <li key={index} className='text-base'>{item}</li>
                ))}
            </ul>
        </div>
    )
}

const Footer = () => {
  return (
    <section className='bg-dark'>
        <div className='flex flex-col px-20 py-14 gap-14'>
            <div className='flex text-white gap-52 font-firago'>
                <div>
                    <Logo />
                </div>
                <div className='flex gap-52'>
                    <List title='კომპანია' list={['ჩვენს შესახებ', 'ისტორია', 'მისია']} />
                    <List title='დახმარება' list={['კონტაქტი', 'ხშირად დასმული კითხვები', 'დახმარების ცენტრი']} />
                    <List title='ნავიგაცია' list={['მთავარი', 'ახალი ამბები', 'ბრმა წერტილები']} />
                </div>
            </div>

            <div className='border-b border-white' />

            <div className='flex items-center justify-between'>
                <p className='text-base text-white font-firago case-on'>
                    &copy; გიორგი დოლიძის ციფრული საკუთრება
                </p>

                <ul className='flex gap-10 text-white font-firago case-on'>
                    <li>
                        დონაცია
                    </li>
                    <li>
                        უსაფრთხოების პოლიტიკა
                    </li>
                    <li>
                        წესები და პირობები 
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer
