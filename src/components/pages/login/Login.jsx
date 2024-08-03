import React from 'react';


function Login(){

    return (
        <>
        <div className="login-page mx-auto  w-[45rem] bg-white">
            <header className='text-center'>
                <h1 className='font-bold  text-3xl mb-5'>Login</h1>
            </header>
            <div className="form">
                <form>

                {/* user email */}
                <div className="email p-2 flex">
                    <label htmlFor="user-email" className='p-2'>Email:</label>
                    <input type="email" id='user-email' name="email" className='p-2 border rounded flex-grow' placeholder='enter your email' />
                </div>
                  {/* password */}
                  <div className="password p-2 flex">
                    <label htmlFor="user-password" className='p-2'>Password:</label>
                    <input type="password" id='user-passwrod' name="password" className='p-2 border rounded flex-grow' placeholder='enter your email' />
                </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;