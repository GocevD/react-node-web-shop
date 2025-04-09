import React from 'react'

const Register = () => {
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Register</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
            <input type='email' name="email" id="email" placeholder='E-mail Address' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>Username</label>
            <input type='username' name="username" id="username" placeholder='Username' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
          </div>
          <div>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Enter password</label>
            <input type='password' name="password" id="password" placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
          </div>
          <div className='mt-4 mb-3'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Confirm password</label>
            <input type='passwordc' name="passwordc" id="passwordc" placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
          </div>
          <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Register</button>
          </div>
        </form> 
      </div>
    </div>
  )
}

export default Register