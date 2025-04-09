import React, { use, useState } from 'react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"

const Login = () => {
  const [message, setMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => console.log(data)

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
            <input
            {...register("email", { required: true })}
            type='email' name="email" id="email" placeholder='E-mail Address' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
          </div>
          <div>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Password</label>
            <input 
              {...register("password", { required: true })}
            type='password' name="password" id="password" placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
          </div>
          {
            message && <p className='text-red-500 text-xs italic mt-2'>{message}</p>
          }
          <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Login</button>
          </div>
          
        </form>
        <p className='align-baseline font-medium mt-4 text-sm'>Don't have an account? <Link to="/register" className='text-blue-500 hover:text-blue-700'>Register here!</Link></p>
          <p className='text-center mt-5 text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Login