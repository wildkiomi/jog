import React, { useCallback } from 'react';
import bear from '../assets/bear.svg';
import bearPink from '../assets/bearPink.png';

const Login = () => {

    const handleSubmit = useCallback(() => {}, []);

    //
    return (
        <>
        <div className="login_form_mobile">
            <img src={bearPink} alt="bearFace" className="bear_face" />
            <button onSubmit={handleSubmit} className="login_button"><span className="let_me_in">Let me in</span></button>
        </div>
        <div className="login_form">
            <img src={bear} alt="bearFace" className="bear_face" />
            <button onSubmit={handleSubmit} className="login_button"><span className="let_me_in">Let me in</span></button>
        </div>
        </>
    );
};

export default Login;