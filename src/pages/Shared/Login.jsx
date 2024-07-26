import React from 'react';


const Login = () => {
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h2 className='card-title'>Login</h2>
                    <p className='card-description'>Enter your email below to login</p>
                </div>
                <div className='card-content'>
                    <div className='divider'>
                        <span className='divider-line' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="user@iamneo.ai" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="******" />
                    </div>
                </div>
                <div className='card-footer'>
                    <button className='button'>Login</button>
                </div>
                <div className="switchto">
                    <button>Switch to admin</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
