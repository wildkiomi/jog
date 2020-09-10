import React, { useCallback } from "react";
import bear from "../../assets/bear.svg";
import bearPink from "../../assets/bearPink.png";
import getToken from "../../api/getToken";
import { useHistory } from "react-router-dom";
import './styles.css';

const Login = () => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    getToken()
      .then(({ response }) => {
        localStorage.setItem("token", JSON.stringify(response));
        history.push("/jogs");
      })
      .catch((error) => console.log(error));
  }, [history]);

  return (
    <>
      <div className="login_form_mobile">
        <img src={bearPink} alt="bearFace" className="bear_face" />
        <button onClick={handleClick} className="login_button">
          <span className="let_me_in">Let me in</span>
        </button>
      </div>
      <div className="login_form">
        <img src={bear} alt="bearFace" className="bear_face" />
        <button onClick={handleClick} className="login_button">
          <span className="let_me_in">Let me in</span>
        </button>
      </div>
    </>
  );
};

export default Login;
