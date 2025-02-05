// eslint-disable-next-line no-unused-vars
import React from 'react'

const Contact = () => {
  return (
    <>
    <div name="Contact" 
    className='mx-w-screen-2xl contaier mx-auto py-4 md:py-20 my-16 container pb-15 pt-16'>
       <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
        <span>Please fill out the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
        <form action='https://getform.io/f/bkkkjyyb'
        method="POST"
        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Full Name</label>
                <input
                    className='shodow rounded-lg appearance-none barder py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter your Fullname'
                />            
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Email Address</label>
                <input
                    className='shodow rounded-lg appearance-none barder py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='name'
                    name='email'
                    type='text'
                    placeholder='Enter your email address'
                />            
            </div>
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'>Message</label>
                <textarea
                    className='shodow rounded-lg appearance-none barder py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='name'
                    name='message'
                    type='text'
                    placeholder='Enter your Query'
                />            
            </div>
            <button
             type='submit'
             className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Contact
