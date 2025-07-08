import React from 'react'
import { SignUp } from '@clerk/nextjs';

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <SignUp routing='path' path='/signup' signInUrl='/login'
            fallbackRedirectUrl='/'
            forceRedirectUrl='/'
        />
    </div>
  )
}
export default Login