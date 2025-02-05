import axios from 'axios';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [resName, setResName] = useState('')

  const handelSubmit = async (e) => {
    e.preventDefult()
    const response = await axios.post('http://localhost/php-backend/index.php', {name})
    console.log(response)
    setResName(response.data.message)
  }

  return (
    <div className='flex justify-center mt-20'>
      <form onSubmit={handelSubmit}>
        <input type='text' name='name' placeholder='Enter Name' className='p-2 border'
        onChange={(e) => setName(e.target.value)} />
        <br />
        <button className='px-12 py-1 bg-green-500 text-white mt-4'>Submit</button> 
      </form>

      {}   
    </div>
  );
}

export default form;
