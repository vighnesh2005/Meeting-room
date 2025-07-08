    import React from 'react'
    import { SignIn } from '@clerk/nextjs';

    const Login = () => {
    return (
        <section className="flex items-center justify-center h-screen w-full">
            <SignIn routing='path' path='/login' signUpUrl='/signup'
                fallbackRedirectUrl='/'
                forceRedirectUrl='/'
            />
        </section>
    )
    }
    export default Login