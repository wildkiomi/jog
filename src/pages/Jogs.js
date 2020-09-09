import React from 'react';
import sad from '../assets/sad.svg';

const Jogs = () => {
    const jogs = null;
    return (<>
    {
        jogs 
        ? "hi"
        : (
            <>
            <img src={sad} alt="sad" className="sad" />
            <p className="no_jogs">Nothing is there</p>
            <button className="create_first_jog"><span>Create your jog first</span></button>
            </>
        )
    }
    </>);
};

export default Jogs;