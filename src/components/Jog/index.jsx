import React from 'react';
import jog from '../../assets/jog.svg';
import './styles.css';
import moment from 'moment';

const Jog = ({
    date,
    distance,
    time
}) => {
    return(
        <div className="jog_container">
            <img src={jog} alt="jog" className="jog_logo" />
            <div className="jog_info">
                <p>{moment.unix(date).calendar()}</p>
                <p>{`Speed: ${Math.round(distance/time)}`}</p>
                <p>{`Distance: ${distance} km`}</p>
                <p>{`Time: ${time} min`}</p>
            </div>
        </div>
    );

};

export default Jog;